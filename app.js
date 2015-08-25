var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	load		= require('express-load');

var app = express();

var errors = require('./middleware/errors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

load('repositories').then('controllers').then('routes').into(app);

//middlewares
app.use(errors.notFound);
app.use(errors.serverError);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});