var express = require('express');
var router = express.Router();

module.exports = function(passport) {
    // POST /users/signup
    router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
        res.json({user: req.user})
    });

module.exports = router;
