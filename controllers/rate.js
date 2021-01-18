import axios from "axios";
import asyncHandler from "../middleware/async.js";


/**
 * @desc    Get Exchange Rates
 * @route   GET /api/rates
 * @access  Public
 **/
export const rates = asyncHandler(async (req, res, next) => {
    const {base, currency} = req.query;
    let response;
    if (base && currency) {
        response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`);
    } else if (base) {
        response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`);
    } else if (currency) {
        response = await axios.get(`https://api.exchangeratesapi.io/latest?symbols=${currency}`);
    } else {
        response = await axios.get(`https://api.exchangeratesapi.io/latest`);
    }


    res.status(200).json({
        results: {
            base: response.data.base,
            date: response.data.date,
            rates: response.data.rates
        }
    });
});