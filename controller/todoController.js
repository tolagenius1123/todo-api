// const contacts = [
// 	{
// 		name: "Omotola",
// 		phoneNumber: "07189455902",
// 	},
// 	{
// 		name: "James",
// 		phoneNumber: "07189455902",
// 	},
// 	{
// 		name: "Cynthia",
// 		phoneNumber: "07189455902",
// 	},
// 	{
// 		name: "Gabriel",
// 		phoneNumber: "07189455902",
// 	},
// 	{
// 		name: "Joyce",
// 		phoneNumber: "07189455902",
// 	},
// ];
import Todo from "../model/todoModel.js";

export const getAllTodos = async (req, res) => {
	console.log(`${req.method} request was made`);
	const todos = await Todo.find();

	if (todos) {
		res.status(200).json(todos);
	}
};

export const addTodo = async (req, res) => {
	console.log(`${req.method} request was made`);

	const { todo } = req.body;

	if (!todo) {
		res.status(400).json({ message: "All fields are required" });
	}

	const newTodo = new Todo({ todo });

	try {
		const savedTodo = await newTodo.save();

		if (savedTodo) {
			return res.status(200).json({ message: "todo saved successfully" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

export const updateTodo = async (req, res) => {
	console.log(`${req.method} request was made`);

	const { id } = req.params;
	res.status(200).json({
		message: `todo with id ${id} was updated successfully`,
	});
};

export const deleteTodo = async (req, res) => {
	console.log(`${req.method} request was made`);
	const { id } = req.params;
	res.status(200).json({
		message: `todo with id ${id} was deleted successfully`,
	});
};

export const getTodo = async (req, res) => {
	console.log(`${req.method} request was made`);
	const { id } = req.params;
	res.status(200).json({
		message: `todo with id ${id} was found successfully`,
	});
};
