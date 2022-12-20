import express from "express";
import morgan from "morgan";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'


// Route Middleware Impost
import router from "./routes/auth.js";
import userRoute from "./routes/user.js";

//Security Middleware Import
app.use(morgan("common"));
// app.use(cookieParser());
// app.use((req, res, next) => {
//   req.connection.setNoDelay(true)
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", true);
//       res.header("Access-Control-Allow-Origin", "https://xxx");

//   res.header('Access-Control-Expose-Headers', 'agreementrequired');

//   next()
// });
// {
//     origin: true,
//     credentials: true
//   }
app.use(express.json());
app.use(cors());
dotenv.config()

// File Upload

// Routes
app.use("/api/v1/users", router);
app.use("/api/v1/users", userRoute);

// Database Connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI,()=>{
    console.log("Database Connect 🔂");
})

// Server Connection 🔂
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
