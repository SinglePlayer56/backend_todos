"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("../schemas/todo"));
const dto_todo_1 = require("../dto/dto.todo");
const router = express_1.default.Router();
router.get('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        const dtoTodos = new dto_todo_1.DtoGetTodos(todos);
        return res.json(dtoTodos.todos);
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
}));
router.get('/todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todo_1.default.findById({ _id: id });
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        const dtoTodo = new dto_todo_1.DtoGetTodo(todo);
        return res.json(dtoTodo);
    }
    catch (e) {
    }
}));
router.post('/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text } = req.body;
    try {
        const newTodo = new todo_1.default({
            text,
            completed: false
        });
        yield newTodo.save();
        const dtoTodo = new dto_todo_1.DtoGetTodo(newTodo);
        return res.json(dtoTodo);
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
}));
router.put('/todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;
        const todo = yield todo_1.default.findByIdAndUpdate(id, { text, completed }, { new: true });
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        const dtoTodo = new dto_todo_1.DtoGetTodo(todo);
        return res.json(dtoTodo);
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
}));
router.delete('/todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todo_1.default.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        const dtoTodo = new dto_todo_1.DtoGetTodo(todo);
        return res.json(dtoTodo);
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
}));
exports.default = router;
