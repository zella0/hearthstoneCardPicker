//Update the name of the controller below and rename the file.
const cards_controller = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/cards/', cards_controller.renderCreate);
  app.post('/cards/', cards_controller.create);

  app.get('/cards/add/:id/', cards_controller.createToList);
  app.get('/cards/remove/:id/', cards_controller.removeFromList);

}
