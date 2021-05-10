const mongoose = require('mongoose');

const MONOG_URL = 'mongodb+srv://Scrum:Scrum@cluster0.s7gz7.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(MONOG_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Scrum",
}).then(()=> {console.log('Connected to MonDB')})
.catch(()=> console.log('cannot connect to mongdb'));

//board model

const Schema = mongoose.Schema;
//title, description, category, board
const cardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    required: true
  },
  boardID: {
    type: String,
    required: true
  },
})
const Cards = mongoose.model('cards', cardSchema);

const boardSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
 
})
const Boards = mongoose.model('boards', boardSchema);

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    rquired: true,
  }
})
const Users = mongoose.model('users', userSchema);

module.exports = {
  Users,
  Cards,
  Boards,
}