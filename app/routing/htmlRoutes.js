//=================
//  Dependencies //
//=================

const path = require('path');

//=================
//    Routing    //
//=================

module.exports = app => {
	app.get('/survey', (req, res) => {
		res.sendFile(path.join(_dirname, '../public/survery.html'));
	});
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
};
