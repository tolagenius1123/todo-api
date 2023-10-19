import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB connected ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error ${error.message}`);
		process.exit(1);
	}
};
connectDB();

app.listen(5000, () => {
	console.log("Server is listening on port 5000");
});

// MIDDLEWARES
app.use(express.json());
app.use("/todos", todoRoutes);
