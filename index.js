const express = require('express');
const todos = require('./api/todos');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/todos', todos);

app.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
