var Form = require('../models/form');

module.exports = (req, res, next)=>{
	// res.send('Thank you!');
	var form = new Form({
		name: req.body.name,
		age: req.body.age,
        sex: req.body.sex,
        like: req.body.like
	});
	form.save(function(err){
		if (err) throw err;
		console.log('saved!');
	}).then(
		Form.find({}, function(err, users) {
			if (err) throw err;

			res.render('file1', {userinfos: users});
		})
	);
}
