var Form = require('../models/form');

module.exports = function(req, res, next){
    Form.find({}, function(err, users){
        if(err) throw err;

        res.render('file2', {userinfos: users});
    });
};