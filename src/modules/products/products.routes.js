import express from "express";
import * as products from "./products.controller.js";

const router = express.Router();

router.get("/", products.getProducts);

router.post("/", products.addProduct);

router.put("/", products.updateProduct);

router.delete("/", products.deleteProduct);

export default router;
