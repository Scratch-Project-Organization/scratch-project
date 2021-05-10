const { Cards } = require('../models/boardModel');

const cardController = {};

//need to add res.locals.card to the route res
cardController.addCard = (req, res, next) => {
    const { title, description, category} = req.body;
    Cards.create({ title, description, category , boardID: req.params.board}, (err, card) => {
        if (err) next({status: 400});
        res.locals.card = card;
        next();
    });
};



cardController.getCards = (req, res, next) => {
    Cards.find({ boardID: req.params.board }, (err, cards) => {
        if (err) next({status: 400});
        res.locals.cards = cards;
        next();
    });
};

cardController.deleteCard = (req, res, next) => {
    const { title, category, boardID } = req.body;
    Cards.findOneAndRemove({ title, category, boardID })
        .then(board => {
            next();
        })
        .catch(err => next({status: 400}))
}


//i think we will need a route to update a card
//so we can grab the param of the card

//where should we put logic to see what we are updating?
// cardController.updateCardDetails = (req, res, next) => {
//     Cards.findByIdAndUpdate({})
// };

cardController.updateCardCategory = async(req, res, next) => {
    try{
        const cardID = req.params.card;
        // console.log(cardID);
        // console.log(req.body.category)
        const updatecard = await Cards.findByIdAndUpdate(req.params.card, {category: req.body.category}, { new: true});
        console.log(updatecard)
        next();

    } catch (error) {
        next(error);
    }
};

//deleted card ID
//609858da9631bf872d8228ab

// cardController.getOneCard = 
// cardController.updateCardTitle = (req, res, next) => {
//     Cards.findByIdAndUpdate({})
// };

module.exports = cardController;