//=================
//  Dependencies //
//=================

const path = require('path');

//=================
//    Routing    //
//=================

module.exports = app => {
	app.get('/survey', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
};
