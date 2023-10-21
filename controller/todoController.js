import Todo from "../model/todoModel.js";
import asyncHandler from "express-async-handler";

export const getAllTodos = asyncHandler(async (req, res) => {
	console.log(`${req.method} request was made`);
	const todos = await Todo.find();

	if (todos) {
		res.status(200).json(todos);
	}
});

export const addTodo = asyncHandler(async (req, res) => {
	console.log(`${req.method} request was made`);

	const { todo } = req.body;

	if (!todo) {
		res.status(400);
		throw new Error("All fields are required");
	}

	try {
		const savedTodo = await Todo.create({ todo });

		if (savedTodo) {
			return res
				.status(200)
				.json({ savedTodo, message: "todo saved successfully" });
		}
	} catch (error) {
		console.error(error);
		res.status(500);
		throw new Error("Internal Server Error");
	}
});

export const updateTodo = asyncHandler(async (req, res) => {
	console.log(`${req.method} request was made`);

	const id = req.params.id;

	const foundTodo = await Todo.findById(id);

	if (!foundTodo) {
		res.status(404);
		throw new Error("Todo not found");
	}

	try {
		const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json({
			updatedTodo,
			message: "Todo was updated successfully",
		});
	} catch (error) {
		res.status(500);
		throw new Error("Internal Server Error");
	}
});

export const deleteTodo = asyncHandler(async (req, res) => {
	console.log(`${req.method} request was made`);

	const id = req.params.id;

	const foundTodo = await Todo.findById(id);

	if (!foundTodo) {
		res.status(404);
		throw new Error("Todo not found");
	}

	try {
		await Todo.deleteOne({ _id: id });
		res.status(200).json({
			message: "Todo was deleted successfully",
		});
	} catch (error) {
		res.status(500);
		throw new Error("Internal Server Error");
	}
});

export const getTodo = asyncHandler(async (req, res) => {
	console.log(`${req.method} request was made`);
	const id = req.params.id;

	const foundTodo = await Todo.findById(id);

	if (!foundTodo) {
		res.status(404);
		throw new Error("Todo not found");
	}

	res.status(200).json(foundTodo);
});
