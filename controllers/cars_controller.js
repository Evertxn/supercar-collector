var express = require('express');
var router = express.Router();
var db = require('../models/supercars');


router.get('/', function (req, res) {
    res.redirect('/supercars');
});


router.get('/supercars', function (req, res) {
    //express callback response
    db.Supercar.findAll()
        .then(function (dbSupercar) {
            console.log(dbSupercar);
            var hbsObject = { supercars: dbSupercar};
            return res.render('index', hbsObject);
    });
});

// post route -> back to index
router.post("/supercars/create", function (req, res) {
    // takes the request object using it as input
    db.Supercar.create({
        car_name: req.body.car_name
        })
        .then(function(dbSupercar) {
        console.log(dbSupercar);
        res.redirect('/');
    });
});

// put route -> back to index
router.put("/supercars/update/", function(req, res) {
    db.Supercar.update(
        {
            collected: true
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then(function (dbSupercar){
        console.log(dbSupercar);
        res.redirect("/");
    });
});

module.exports = router;