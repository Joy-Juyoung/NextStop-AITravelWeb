const express = require("express");
const cors = require("cors");
const userRoute = require("./UserRoute");

const app = express();

app.use(
  cors({
    origin: ["https://hackathon-web-lime.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());
app.use("/api", userRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
