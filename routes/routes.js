const path = require("path");
const db = require("../models");

module.exports = app => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	app.get("/api/comments", (req, res) => {
		db.Comment.findAll({}).then(dbComment => {
			res.json(dbComment);
		});
	});

	app.post("/api/comments", (req, res) => {
		console.log(req.body);
		db.Comment.create({
			name: req.body.name,
			email: req.body.email,
			comment: req.body.comment
		}).then(dbComment => {
			res.json(dbComment);
		});
	});
}