const models = require('../models/boardModel');

const scrumController = {};

scrumController.addCard = (req, res, next) => {
    models.Cards.create(req.body, (err, card) => {
        if (err) next ({log: err.stack});
        next();
    });
};

scrumController.addCard = (req, res, next) => {
    models.Cards.create(req.body, (err, card) => {
        if (err) next ({log: err.stack});
        next();
    });
};

