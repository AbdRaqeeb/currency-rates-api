import express from 'express';
import {rates} from "../controllers/rate.js";

const router = express.Router();

router.route('/').get(rates);

export default router;