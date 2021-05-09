const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');


const app = express();
const PORT = 3000;

// if( NODE_ENV == "production"){
app.use('/build', express.static(path.join(__dirname, '../build')));
// }


app.use('/api', apiRouter);


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})



app.listen(PORT, () => console.log(`Server listening on ${PORT}`));