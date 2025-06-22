const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

// ✅ Use express built-in parsers
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("🟢 Contact API is running!");
});

app.post("/", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "Missing fields" });
    }

    res.status(200).json({
        success: true,
        message: "Message received successfully",
        data: { name, email, message },
    });
});

// ❌ No app.listen() — Vercel uses this export
module.exports.handler = serverless(app);
