import mongoose from "mongoose";

const todoModel = mongoose.Schema(
	{
		todo: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Todo", todoModel);
