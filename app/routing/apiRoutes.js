//=================
//    Load Data  //
//=================

const friends = require('../data/friends');

//=================
//    Routing    //
//=================

module.exports = app => {
	app.get('/api/friends', (req, res) => {
		res.json(friends);
    });
    
    app.post('/api/friends', (req, res) => {
        if()
    })
};
