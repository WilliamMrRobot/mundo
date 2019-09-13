const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

var bodyParser = require('body-parser');
var Country = require('./models/Country');
var City = require('./models/City');
var State = require('./models/State');
// connects to database
mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));


// initializes application
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var countryRoutes = require('./routes/CountryRoutes'); //importing route
var cityRoutes = require('./routes/CityRoutes'); //importing route
var stateRoutes = require('./routes/StateRoutes'); //importing route
countryRoutes(app); //register the route
cityRoutes(app); //register the route
stateRoutes(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
})