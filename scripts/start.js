#!/usr/bin/env node
// @ts-check

const express = require("express");
const path = require("path");
const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname, "../src")));
app.listen(port);

console.log(`Listening on port ${port}`);
