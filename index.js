import express from "express";
import productsRouter from "./src/modules/products/products.routes.js";
import cors from "cors";
const app = express();
const port = process.env.port || 3000;
app.use(cors());

app.use(express.json());

app.use("/products", productsRouter);

app.get("/",(req, res)=>{
res.send("Welcome to my project")
})

app.use("*", (req, res) => {
  res.send("404 not found");
});

app.listen(port);
