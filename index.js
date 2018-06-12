let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', require('./controllers'));

app.listen(8200, function(){
	console.log('App running on 8200');
});
