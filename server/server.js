const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');


const app = express();
const PORT = 3000;


// connect to MongoDB
const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://Scrum:Scrum@cluster0.s7gz7.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Scrum",
}).then(() => { console.log('Connected to MongoDB') })
  .catch(() => console.log('cannot connect to mongdb'));

app.use(express.json());

if (process.env.NODE_ENV == "production") {
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

