'use strict';
module.exports = function (app) {
  var countryController = require('../controllers/CountryController');

  // Country Routes
  app.route('/api/country')
    .get(countryController.list_all_countries)
    .post(countryController.create_a_country);


  app.route('/api/country/:id')
    .get(countryController.read_a_country)
    .put(countryController.update_a_country)
    .delete(countryController.delete_a_country);
};