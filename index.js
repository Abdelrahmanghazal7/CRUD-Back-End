import express from "express";
import postsRouter from "./src/modules/posts/posts.routes.js";
import cors from "cors";
const app = express();
const port = process.env.port || 3000;
app.use(cors());

app.use(express.json());

app.use("/posts", postsRouter);

app.use("*", (req, res) => {
  res.send("404 not found");
});

app.listen(port);
