import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config.js';
import {errorHandler} from "../middleware/error.js";

// import router
import rates from '../routes/rate.js';

const app = express();

app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static('public'));

// mount routers
app.use('/api/rates', rates);

// error handling
app.use(errorHandler);

export default app;

