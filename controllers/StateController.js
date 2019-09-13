'use strict';

var mongoose = require('mongoose');
var State = mongoose.model('State');

exports.list_all_states = function (req, res) {
	State.find({}, function (err, states) {
		if (err)
			res.send(err);
		res.json(states);
	});
};

exports.create_a_state = function (req, res) {
	const new_state = new State(req.body);
	new_state.save(function (err, result) {
		if (err)
			res.send(err);
		res.json(result);
	});
};

exports.read_a_state = function (req, res) {
	State.findById(req.params.code, function (err, state) {
		if (err)
			res.send(err);
		res.json(state);
	});
};

exports.update_a_state = function (req, res) {
	State.findOneAndUpdate({ _id: req.params.code }, req.body, { new: true }, function (err, state) {
		if (err)
			res.send(state);
	});
};

exports.delete_a_state = function (req, res) {
	State.remove({
		_id: req.params.id
	}, function (err, state) {
		if (err)
			res.send(err);
		res.json({ message: 'Countries successfully deleted' });
	});
};
