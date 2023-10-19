import express from "express";
const router = express.Router();
import {
	getAllTodos,
	getTodo,
	updateTodo,
	addTodo,
	deleteTodo,
} from "../controller/todoController.js";

// GET todos
router.get("/", getAllTodos);

// POST a todo
router.post("/", addTodo);

// UPDATE a todo
router.put("/todo/:id", updateTodo);

// DELETE a todo
router.delete("/todo/:id", deleteTodo);

// GET a todo
router.get("/todo/:id", getTodo);

export default router;
