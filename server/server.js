const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/userRouter')
const cookieParser = require('cookie-parser')
const sessionController = require('./controllers/sessionController')
//const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
// app.use(express.urlencoded({extended: true}))
// app.use((req, res, next) => {
//   console.log(`request body: ${JSON.stringify(req.body, null, 2)}`)});

app.use(cookieParser());


if( process.env.NODE_ENV == "production"){
  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
    })
}



app.use('/api', apiRouter);

app.use('/user', userRouter);

//home page

//catch all end point error page
app.use((req, res) => res.status(404).send('page not found'));

//global error handler

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

