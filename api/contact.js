const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🟢 Contact API is running!");
});

app.post("/", (req, res) => {
    const { name, email, message } = req.body;
    res.status(200).json({ success: true, name, email, message });
});

// 👇 REQUIRED: This is how Vercel uses the route
module.exports.handler = serverless(app);
