import express  from 'express';
import todos from './api/todos';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

mongoose.connect("mongodb+srv://root:qwerty123456@todos-database.6qhka35.mongodb.net/todos?retryWrites=true&w=majority");
const connection = mongoose.connection;

connection.on('error', (error) => {
    console.error(error);
});

connection.once('open', () => {
    console.log('Connected to the database');
})


const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'https://todo-app-inky-five.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());
app.use('/api', todos);

app.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
