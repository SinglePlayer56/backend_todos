"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TodoSchema = new Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, required: true }
}, { versionKey: false });
const Todo = mongoose_1.default.model('Todo', TodoSchema);
exports.default = Todo;
