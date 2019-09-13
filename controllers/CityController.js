'use strict';

var mongoose = require('mongoose');
var City = mongoose.model('City');

exports.list_all_cities = function (req, res) {
	City.find({}, function (err, cities) {
		if (err)
			res.send(err);
		res.json(cities);
	});
};

exports.create_a_city = function (req, res) {
	const new_city = new City(req.body);
	new_city.save(function (err, result) {
		if (err)
			res.send(err);
		res.json(result);
	});
};

exports.read_a_city = function (req, res) {
	City.findById(req.params.code, function (err, city) {
		if (err)
			res.send(err);
		res.json(city);
	});
};

exports.update_a_city = function (req, res) {
	City.findOneAndUpdate({ _id: req.params.code }, req.body, { new: true }, function (err, city) {
		if (err)
			res.send(city);
	});
};

exports.delete_a_city = function (req, res) {
	City.remove({
		_id: req.params.id
	}, function (err, city) {
		if (err)
			res.send(err);
		res.json({ message: 'Countries successfully deleted' });
	});
};
