import express, { Request, Response, NextFunction } from "express";
// import express = require("express");
// const express = require("express");
interface MessageRequest extends Request {
  body: {
    message: string;
  };
}
const app = express();
app.use(express.json());
app.use("/", (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("hello");
  next();
});
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("<h1>Hello</h1>");
});
app.post("/", (req: MessageRequest, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.send(`<h1>I got ${req.body}</h1>`);
});
app.listen(3000);
