import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "PH University server is running",
    description: "Welcome to University of Programming Hero",
  });
});

export default app;
