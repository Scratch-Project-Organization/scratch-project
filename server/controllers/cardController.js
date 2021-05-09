const models = require('../models/boardModel');

const cardController = {};

//need to add res.locals.card to the route res
cardController.addCard = (req, res, next) => {
    const { title, description, board, user_id } = req.body;
    models.Cards.create({ title, description, board, user_id }, (err, card) => {
        if (err) next({status: 400});
        res.locals.card = card;
        next();
    });
};


//i think we will need a route to update a card
//so we can grab the param of the card

//where should we put logic to see what we are updating?
cardController.updateCard = (req, res, next) => {
    models.Cards.findByIdAndUpdate({})
};



module.exports = cardController;