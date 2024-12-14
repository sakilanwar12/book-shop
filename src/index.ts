import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
