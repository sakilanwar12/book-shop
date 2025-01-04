import express, {  Request, Response } from "express";
import morgan from "morgan";
import userRouter from "./app/modules/user/user-route";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

export default app;
