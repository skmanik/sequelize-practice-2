const express = require("express");
const bodyParser = require("body-parser");
const setupRoutes = require("./routes/routes.js");

// set up express
const app = express();
const PORT = process.env.PORT || 8080;

// require models
const db = require("./models");

// express data parsing handle
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// add routes
setupRoutes(app);

// react?
app.use(express.static("client/build"));

// sync sequelize models and start express
db.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log("App listening on PORT " + PORT);
	});
});