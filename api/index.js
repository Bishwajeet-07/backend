// index.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("🟢 Contact API is running!");
});

app.post("/", (req, res) => {
    const { name, email, message } = req.body;

    res.status(200).json({
        success: true,
        message: "Message received successfully",
        data: { name, email, message },
    });
});

// ⛔️ Don't use app.listen()
// ✅ Export handler instead
module.exports = app;
module.exports.handler = serverless(app);
