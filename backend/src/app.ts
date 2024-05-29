import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL as string,
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", async (req: Request, res: Response) => {
  res.send({ message: "Hi!! This is the server for my Internship-Assignment" });
});

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health ok!" });
});

app.use("/api/v1/user", userRoute);

export { app };
