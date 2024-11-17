import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from 'cors'
import router from "./routes/auth.js";

import productRouter from './routes/productRouter.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT | 3001;
connectDB();

app.use(express.json());
app.use(cors());
app.use("/auth", router);
app.use("/products", productRouter)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 