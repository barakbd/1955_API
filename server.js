var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var tracer = require('tracer').colorConsole();
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));
// app.set('view engine', 'ejs');
require('./server/config/person.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(8000, function(){
    tracer.info('listening on port 8000');
});
