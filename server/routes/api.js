const express = require('express');

const boardController = require('../controllers/boardController');
const cardController = require('../controllers/cardController');
const userController = require('../controllers/cardController');

const router = express.Router();

//router for home page
//middleware needed - addBoard, getBoards, deleteBoard
router.get('/', boardController.getBoards, (req, res) => {
    res.status(200).json(res.locals.boards);
});

router.post('/', boardController.addBoard, (req, res) => {
    res.status(200).json(res.locals.board);
});

router.delete('/', boardController.deleteBoard, (req, res) => {
    res.status(200).json({"message": "deleted"});
});

// route to the individual boards
//middleware needed - addCard, getCards, deleteCard
router.get('/:board', cardController.getCards, (req,res) => {
    res.status(200).json(res.locals.cards);
});

router.post('/:board', cardController.addCard, (req,res) => {
    res.status(200).json(res.locals.card);
});

router.delete('/:board', cardController.deleteCard, (req, res) => {
    res.status(200).json({"message": "deleted"});
});

// route to edit the individual cards
// middleware needed - updateDetails, updateTitle, updateCategory
router.patch('/:board/:card', cardController.updateCardCategory, (req,res) => {
    res.status(200).json(res.locals.cards);
});


// router.get('/:card', cardController.getOneCard, (req,res) => {
//     res.status(200).json(res.locals.card);
// });



// router.get('/project/:id', (req,res)=>{
//     res.status.json({});
// })


// router.get("/project", (req,es)=>{
//     res.status.json({});
// })

module.exports = router;