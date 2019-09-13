'use strict';
module.exports = function (app) {
  var cityController = require('../controllers/CityController');

  // todoList Routes
  app.route('/api/city')
    .get(cityController.list_all_cities)
    .post(cityController.create_a_city);


  app.route('/api/city/:id')
    .get(cityController.read_a_city)
    .put(cityController.update_a_city)
    .delete(cityController.delete_a_city);
};