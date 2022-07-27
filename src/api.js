const express = require('express');
const authRoute = require('./Routes/authRoute');
const userRoute = require('./Routes/userRoute');
const categoryRoute = require('./Routes/categoryRoute');
const postRoute = require('./Routes/postRoute');
const errorMiddleware = require('./Middlewares/errorMiddleware');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRoute);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
