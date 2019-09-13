'use strict';

var mongoose = require('mongoose');
var Country = mongoose.model('Country');

exports.list_all_countries = function (req, res) {
  Country.find({}, function (err, countries) {
    if (err)
      res.send(err);
    res.json(countries);
  });
};

exports.create_a_country = function (req, res) {
  console.log(req.body);
  const new_country = new Country(req.body);
  new_country.save(function (err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

exports.read_a_country = function (req, res) {
  Country.findById(req.params.code, function (err, country) {
    if (err)
      res.send(err);
    res.json(country);
  });
};

exports.update_a_country = function (req, res) {
  Country.findOneAndUpdate({ _id: req.params.code }, req.body, { new: true }, function (err, country) {
    if (err)
      res.send(country);
  });
};

exports.delete_a_country = function (req, res) {
  Country.remove({
    _id: req.params.id
  }, function (err, country) {
    if (err)
      res.send(err);
    res.json({ message: 'Countries successfully deleted' });
  });
};
