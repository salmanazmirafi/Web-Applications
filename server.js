import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import auth from "./routes/auth.js";

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
// Use Middleware
const app = express();
dotenv.config();

// Database
mongoose.set("strictQuery", true);
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
// middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", auth);
// app.use("/api/v1");
// app.use("/api/v1");
// app.use("/api/v1");

// Middleware for Errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = process.env.PORT || 5000;
// Server
app.listen(port, () => {
  connect();
  console.log(`Server running on port ${port} 🔥`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
