//=================
//  Dependencies //
//=================

const express = require('express');
const bodyParser = require('body-parser');

//=================
//  Express setup //
//=================

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//=================
//      Router   //
//=================

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//=================
//    Listener   //
//=================

app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
});
