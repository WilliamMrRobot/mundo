'use strict';
module.exports = function (app) {
  var stateList = require('../controllers/StateController');

  // todoList Routes
  app.route('/api/states')
    .get(stateList.list_all_states)
    .post(stateList.create_a_state);


  app.route('/api/states/:id')
    .get(stateList.read_a_state)
    .put(stateList.update_a_state)
    .delete(stateList.delete_a_state);
};