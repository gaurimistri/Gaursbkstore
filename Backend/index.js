import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4001;
const URI = process.env.MONGO_URI;

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user",userRoute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
