const models = require('../models/boardModel');

const userController = {};

//need to add res.locals.user to the route res
userController.addUser = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    models.Users.create({ firstName, lastName, email, password }, (err, user) => {
        if (err) next({status: 400});
        res.locals.user = user;
        next();
      });
};



module.exports = userController;


// const userSchema = new Schema({
//     firstName: {
//       type: String,
//     },
//     lastName: {
//       type: String
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       rquired: true,
//     }
//   })