import express  from 'express';
import todos from './api/todos';
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/todos', todos);

app.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
