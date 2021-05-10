const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');


const app = express();
const PORT = 3000;

app.use(express.json());

if( process.env.NODE_ENV == "production"){
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})
}


app.use('/api', apiRouter);

//home page



//catch all end point error page
app.use((req, res) => res.status(404).send('page not found'));

//global error handler


app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

