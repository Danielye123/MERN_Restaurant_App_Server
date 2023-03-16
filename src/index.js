import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { userRouter } from './routes/users.js';

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//endpoints
app.use("/auth", userRouter);

//connect to database
mongoose.connect(process.env.MONGODB_CONNECTION);

app.listen(3001, () => console.log("Server Started"));
