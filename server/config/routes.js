var mongoose = require('mongoose');
var Person = mongoose.model('Person');
var persons = require('../controllers/persons.js');


module.exports = function(app){
    app.get('/', function(req, res){
        persons.find_all_persons(req, res);
    });

    app.get('/new/:name', function(req, res){
        persons.input_new_person(req,res);
    });

    app.get('/remove/:name', function(req, res){
        persons.delete_person(req,res);
    });

    app.get('/:name', function(req, res){
        persons.show_one_name(req, res);
    });

};//END module.exports
