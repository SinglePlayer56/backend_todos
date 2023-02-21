"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoGetTodo = exports.DtoGetTodos = void 0;
class DtoGetTodos {
    constructor(model) {
        this.todos = [];
        this.todos = model.map((todo) => ({
            id: todo._id,
            text: todo.text,
            completed: todo.completed
        }));
    }
}
exports.DtoGetTodos = DtoGetTodos;
class DtoGetTodo {
    constructor(model) {
        if (model._id) {
            this.id = model._id;
        }
        this.text = model.text;
        this.completed = model.completed;
    }
}
exports.DtoGetTodo = DtoGetTodo;
