const { Users } = require("../models/boardModel");
const bcrypt = require('bcrypt')

const loginController = {

 registerUser (req, res, next) {
    console.log("in logincontroller for register user")
      const {username, password, password2} = req.body;
      // console.log(req)
      if(password !== password2){
          res.send("{passNotMatching: true}")
      } else {
          console.log("inside else statement")
          Users.findOne({username: username})
            .then(user => {
                if(!user) {
                    console.log("user not found, creating user now")
                    Users.create({username: username, password: password}, (err, userResult) =>{
                      if(err) {
                        console.log(err)
                      }
                      console.log(userResult)
                      res.locals.id = userResult.id.toString();
                      return next();
                    })
                } else {
                    res.json({userAlreadyExists: true})
                }
            }).catch(err => res.status(400).json(err))
      }
  },

  loginUser (req, res, next) {
    // console.log("in logincontroller for login user", req)
   //console.log(req)
    const {username, password} = req.body
    Users.findOne({username: username})
        .then(user => {
            if(user){
                console.log("user exists")
                bcrypt.compare(password, user.password)
                .then(result =>{
                    console.log("bcrypt compared done")
                    if(result){
                    res.locals.id = user.id.toString();
                    console.log("data sent to next middle ware", res.locals.id)
                    next();
                    }
                    else {
                      res.send("username or password incorrect")
                    }
                   })
            }
            else {
                console.log('user not found')
              res.send("you do not have a password")
            }
          })
        .catch(err => res.status(400).json(err))
  }
}

module.exports = loginController;