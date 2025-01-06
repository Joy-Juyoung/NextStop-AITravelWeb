const express = require("express");
const cors = require("cors");
const userRoute = require("./UserRoute");

const app = express();

app.use(
  cors({
    origin: [
      "https://hackathon-web-lime.vercel.app/planResult?id=i4AMeGIHmRpyFYrREjVy",
      "http://localhost:3000",
      "http://localhost:3001",
      "https://hackathon-web-4ov5.onrender.com/api/chat",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", userRoute);

module.exports = app;

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
