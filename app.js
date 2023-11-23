import express from 'express';
import colors from 'colors';
import userRoutes from './Routes/userRoutes.js';
import cors from 'cors';
import { config } from 'dotenv';
import dotenv from 'dotenv';
import {connectDB} from './db/database.js'; 
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './Middleware/error.js';

dotenv.config();
connectDB();
export const app = express();

const PORT = process.env.PORT || 8080;

config({
    path:"./data/config.env",
})

// Add middleware to parse JSON in the request body
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET","POST"],
  credentials: true,
}));
// using routes
app.use("/api/users", userRoutes);

// adding error middleware
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("Hello Server is Live");
});