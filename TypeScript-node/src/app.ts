import express from "express";
import { isNewExpression } from "typescript";
// import express = require("express");
// const express = require("express");
const app = express();
app.use("/", (req, res, next) => {
  console.log("hello");
  next();
});
app.get("/", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});
app.listen(3000);
