const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  renderCreate: (req, res) => {
    knex('cards')
      .then((result) => {
        if (!req.session.deck) {
          console.log('cards session does not exist');
          req.session.deck = [];
          console.log('cards session created');
        }
        res.render('cards', {
          cards: result,
          deck: req.session.deck
        });
      })
  },
  create: (req, res) => {
    knex('cards')
      .insert({
        name: req.body.name,
        description: req.body.description,
        mana: req.body.mana,
        health: req.body.health,
        attack: req.body.attack
      })
      .then(() => {
        res.redirect('/cards')
      })
  },
  createToList: (req, res) => {
    knex('cards')
      .where('cards.id', req.params.id)
      .then((result) => {
        req.session.deck.push(result)
        req.session.save(() => {
          res.redirect('/cards');
        })
      })
  },
  removeFromList: (req, res) => {
      req.session.deck.splice(req.params.id, 1);
      res.redirect('/cards');
  }
}
