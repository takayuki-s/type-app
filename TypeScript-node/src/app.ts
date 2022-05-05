import express, { Request, Response, NextFunction } from "express";
// import express = require("express");
// const express = require("express");
const app = express();
app.use("/", (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("hello");
  next();
});
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("<h1>Hello</h1>");
});
app.listen(3000);
