const { Boards } = require('../models/boardModel');
const { Users } = require('../models/boardModel');
const boardController = {};

boardController.addBoard = (req, res, next) => {
    console.log("in boardController.addBoard")
    const { title } = req.body;
    Boards.create({ title }, (err, board) => {
        if (err) next ({status: 400});
        console.log(board)
        res.locals.board = board;
        next();
    });
};

boardController.getBoards = (req, res, next) => {
    console.log("in getBoards")
    Users.findOne({_id: req.cookies.ssid}, (err, result) =>{
        if(result){
            Boards.find().where('_id').in(result.boards).exec((err, records) =>{
                res.locals.boards = records;
                next();
            })
        }else{
            console.log(err)
        }
    })
    // console.log(result)
    // Boards.find({}).exec()
    //     .then(board => {
    //         // console.log(board)
    //         res.locals.boards = board;
    //         next();
    //     })
    //     .catch(err => next({status: 400}))

};

boardController.deleteBoard = (req, res, next) => {
    const { title } = req.body;
    Boards.findOneAndRemove({ title })
    //find all and delete - for card model
    //pass in boardID for what we are searching    
    .then(board => {
            next();
        })
        .catch(err => next({status: 400}))
}

module.exports = boardController;

// const boardSchema = new Schema({
//     title: {
//       type: String,
//       required: true
//     },
//     card_id: {
//       type: Schema.Types.ObjectId,
//       ref: 'cards'
//     },
//   })