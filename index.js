const express = require("express");
const app = express();
let cors = require('cors')


app.use(cors({
    origin: true, // Allow all origins in development
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("🟢 Contact API is running!");
});

app.post("/", (req, res) => {
    const { name, email, message } = req.body;

    // Add your email logic here using nodemailer
    res.status(200).json({
        success: true,
        message: "Message received successfully",
        data: { name, email, message }
    });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
