import express, {Request} from 'express';
import Todo, {ITodo} from '../schemas/todo';
const router = express.Router();


type reqTodo = Request & { body: ITodo };

router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();

        return res.json(todos);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
});

router.post('/todo', async (req: reqTodo, res) => {
    const {text, completed = false} = req.body;

    try{
        const newTodo = new Todo<ITodo>({
            text,
            completed
        });

        await newTodo.save();

        return res.json(newTodo);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return  res.status(500).send(e.message);
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

        return res.json(todo);
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

        return res.json(todo);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return res.status(500).send(e.message);
        }
    }
})

export default router;
