import {ITodo} from "../schemas/todo";

export class DtoGetTodos {
    public todos:ITodo[] = [];

    constructor(model: ITodo[]) {
        this.todos = model.map((todo: ITodo) => ({
            id: todo._id,
            text: todo.text,
            completed: todo.completed
        }));
    }
}

export class DtoGetTodo {
    public id?: string;
    public completed: boolean;
    public text: string;

    constructor(model: ITodo) {
        if (model._id) {
            this.id = model._id;
        }
        this.text = model.text;
        this.completed = model.completed
    }

}
