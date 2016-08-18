var mongoose = require('mongoose');
var Person = mongoose.model('Person');
var tracer = require('tracer').colorConsole();
// var ValidationError = mongoose.Error.ValidationError;
// var ValidatorError  = mongoose.Error.ValidatorError;

module.exports = {
    find_all_persons: function(req, res) {
        Person.find({}, function(err, persons) {
            if (err) {
                res.end('no persons find');
            } else {
                res.json({persons: persons});
            }
        });
    }, // END find_all_persons
    input_new_person: function(req, res) {
        var person = new Person({
            name: req.params.name
        });
        person.save(function(err) {
            if (err) {
                tracer.info('Error inserting new name', err);
                tracer.info('Error inserting new name', err.errors.name.message);
                var error = err.errors.name.message;
                tracer.info('For Miguel - ', typeof(error)); //Type is string
                res.end(error); //Works
                // res.json(error); - Works
            } else {
                tracer.info('Success inserting new name');
                res.json('Success inserting new name');
            }
        });
    }, // END input_new_person
    delete_person: function(req, res) {
        Person.remove({
            name: req.params.name
        }, function(err) {
            if (err) {
                tracer.info('Failed to delete person');
                res.end('Failed to delete person');
            } else {
                tracer.info('Succesfully deleted person');
                res.json('Success deleting person');
            }
        });
    }, //END delete_person
    show_one_name: function(req, res) {
        Person.find({
            name: req.params.name
        }, function(err, person) {
            if (err) {
                tracer.info('Could not find this person');
                res.end('Could not find this person');
            } else {
                tracer.info('Found person!');
                res.json(person);
            }
        });
    }

}; //END module.exports
