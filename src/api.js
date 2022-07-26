const express = require('express');
const authRoute = require('./Routes/authRoute');
const userRoute = require('./Routes/userRoute');
const errorMiddleware = require('./Middlewares/errorMiddleware');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRoute);
app.use('/user', userRoute);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
