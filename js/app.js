"use strict";
import { allProducts } from "../data/allData.js";
import { getProductDataToServer } from "./general.js";
import productGenerator from "./productGenerator.js";
// select element in dom
const bestSellersProducts = document.querySelector("#bestSellersProducts");

getProductDataToServer(productGenerator, bestSellersProducts, "index");
// productGenerator(allProducts, bestSellersProducts, "index");
