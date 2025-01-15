import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config"; //Automatically loads environment variables from a .env file into process.env.
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
      .then(() => console.log("Connected to MongoDB"));
const app = express();
app.use(cors()); //add cors middleware
app.use(express.json());

app.get("/test", async (req: Request, res: Response) => {
  res.json({message: "Hello World"});
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});