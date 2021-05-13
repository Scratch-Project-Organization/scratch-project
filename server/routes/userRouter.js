const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');

const loginController = require('../controllers/loginController')
const cookieController = require('../controllers/cookieController')
const sessionController = require('../controllers/sessionController')
// const sessionController = require('../controllers/sessionController')

//get/post requests for authentication
userRouter.post('/login', 
  loginController.loginUser, //store userId into res.locals.id
  cookieController.setSSIDCookie,//cookieController //res.locals.id
  sessionController.startSession,//sessionController
  (req,res) =>{
  res.status(200).send(res.locals)
});

userRouter.post('/register', 
  loginController.registerUser, 
  cookieController.setSSIDCookie,//cookieController //res.locals.id
  sessionController.startSession,
  (req, res) => {
    console.log(req.body)
    res.status(200).send("from userRouter.post/register")
});

userRouter.post('/logout', (req, res) => {
    req.session.destroy()
    res.json('User Logged Out')
});

module.exports = userRouter;