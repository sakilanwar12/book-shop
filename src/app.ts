import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import createError from "http-errors";
interface HttpError extends Error {
  status?: number;
}
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/api/user", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// client error
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, "Route Not found"));
});

// server error
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
});

export default app;
