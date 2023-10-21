import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();
const app = express();
connectDB();

app.listen(5000, () => {
	console.log("Server is listening on port 5000");
});

// MIDDLEWARES
app.use(express.json());
app.use("/todos", todoRoutes);

app.use(errorHandler);
