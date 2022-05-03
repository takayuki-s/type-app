import express from "express";
// import express = require("express");
// const express = require("express");
const app = express();
app.get("/", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});
app.listen(3000);
