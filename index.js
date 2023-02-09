"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./api/todos"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://root:qwerty123456@todos-database.6qhka35.mongodb.net/todos?retryWrites=true&w=majority");
const connection = mongoose_1.default.connection;
connection.on('error', (error) => {
    console.error(error);
});
connection.once('open', () => {
    console.log('Connected to the database');
});
const PORT = process.env.PORT || 3000;
app.use('/api', todos_1.default);
app.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
