var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
// ******************** Connect to DB and create DB *******************
mongoose.connect('mongodb://localhost/poeple_born_1955');
var models_path = path.join(__dirname, './../models');
// ******************** Load all models *******************
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>= 0){
        require(models_path + '/' + file);
    }
});
