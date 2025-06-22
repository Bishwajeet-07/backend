const express = require("express");
const serverless = require("serverless-http");

const app = express();

// ✅ Use express built-in parsers

app.get("/", (req, res) => {
    res.send("🟢 Contact API is running!");
});

module.exports = serverless(app);

