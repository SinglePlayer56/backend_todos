import express, {Request} from 'express';
import Todo, {ITodo} from '../schemas/todo';
import {DtoGetTodo, DtoGetTodos} from "../dto/dto.todo";

const router = express.Router();

interface reqTodo extends Request {
    body: ITodo;
}

router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();

        const dtoTodos = new DtoGetTodos(todos);
        return res.json(dtoTodos.todos);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
});

router.get('/todo/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const todo = await Todo.findById({_id:id});

        if (!todo) {
            return res.status(404).send('Todo not found');
        }

        const dtoTodo = new DtoGetTodo(todo);

        return res.json(dtoTodo);
    } catch (e) {

    }
})

router.post('/todo', async (req: reqTodo, res) => {
    const {text} = req.body;

    try {
        const newTodo = new Todo<ITodo>({
            text,
            completed: false
        });

        await newTodo.save();

        const dtoTodo = new DtoGetTodo(newTodo);

        return res.json(dtoTodo);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
});

router.put('/todo/:id', async (req: reqTodo, res) => {
    try {
        const {id} = req.params;
        const {text, completed} = req.body;

        const todo = await Todo.findByIdAndUpdate(id, {text, completed}, {new: true});

        if (!todo) {
            return res.status(404).send('Todo not found');
        }

        const dtoTodo = new DtoGetTodo(todo);

        return res.json(dtoTodo);
    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
});

router.delete('/todo/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).send('Todo not found');
        }

        const dtoTodo = new DtoGetTodo(todo);

        return res.json(dtoTodo);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
})

export default router;
