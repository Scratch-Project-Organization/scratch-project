const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const MONOG_URL = 'mongodb+srv://Scrum:Scrum@cluster0.s7gz7.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(MONOG_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Scrum",
}).then(()=> {console.log('Connected to MonDB')})
.catch(()=> console.log('cannot connect to mongdb'));

const Schema = mongoose.Schema;


 

//board model


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


const boardSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },

})


const userSchema = new Schema({

  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  boards: []
})

const sessionSchema = new Schema({
  cookieId: {type: String, required: true, unique: true},
  createdAt: {type: Date, expires: 45, default: Date.now}
})

userSchema.pre('save', async function(next){
  const user = this;
  user.password = await bcrypt.hash(user.password, 10)
  next();
})


const Users = mongoose.model('users', userSchema);
const Cards = mongoose.model('cards', cardSchema);
const Boards = mongoose.model('boards', boardSchema);
const Session = mongoose.model('Session', sessionSchema)


module.exports = {
  Users,
  Cards,
  Boards,
  Session
}