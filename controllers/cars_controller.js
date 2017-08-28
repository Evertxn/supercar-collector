var db = require("../models");

module.exports = function(app) {

    // Create routes
    app.get('/', function(req, res) {
        res.redirect('/index');
    });

    // Render page with all objects from burgers table in burgers_db
    app.get("/index", function(req, res) {
        db.Supercar.findAll({}).then(function(data) {
            console.log(data);
            var hbsObject = {
                foobar: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post('/index', function(req, res) {
        db.Supercar.create({
            car_name: req.body.name
        }).then(function (results) {
            res.redirect('/index');
        });
    });

    // Put route to /index/:id when updating car to collected set as true
    app.put("/:id", function(req, res) {
        console.log("id to update: ", req.params.id);
        db.Supercar.update({
            collected: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.redirect("/index");
        });

    });



};