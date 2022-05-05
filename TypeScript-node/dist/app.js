"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import express = require("express");
// const express = require("express");
const app = (0, express_1.default)();
app.use("/", (err, req, res, next) => {
    console.log("hello");
    next();
});
app.get("/", (req, res, next) => {
    res.send("<h1>Hello</h1>");
});
app.listen(3000);
