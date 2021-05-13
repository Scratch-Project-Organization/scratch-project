const { Boards} = require('../models/boardModel');

const boardController = {};

boardController.addBoard = (req, res, next) => {
    const { title } = req.body;
    Boards.create({ title }, (err, board) => {
        if (err) next ({status: 400});
        console.log(board)
        res.locals.board = board;
        next();
    });
};

boardController.getBoards = (req, res, next) => {
    Boards.find({}).exec()
        .then(board => {
            res.locals.boards = board;
            next();
        })
        .catch(err => next({status: 400}))

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