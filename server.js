//=================
//  Dependencies //
//=================

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//=================
//  Express setup //
//=================

const app = express();
const PORT = process.env.PORT || 3800;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//=================
//      Router   //
//=================

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//=================
//    Listener   //
//=================

app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
});
