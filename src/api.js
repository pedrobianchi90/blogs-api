const express = require('express');
// const loginRoute = require('./Routes/loginRoute');
const authRoute = require('./Routes/authRoute');
const errorMiddleware = require('./Middlewares/errorMiddleware');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRoute);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
