import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface ITodo {
    text: string;
    completed: boolean;
}

const TodoSchema = new Schema<ITodo>({
    text: {type: String, required: true},
    completed: {type: Boolean, required: true}
});

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);

export default Todo;
