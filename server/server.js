const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;

// if( NODE_ENV == "production"){
app.use('/build', express.static(path.join(__dirname, '../build')));
// }


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})



app.listen(PORT, () => console.log(`Server listening on ${PORT}`));