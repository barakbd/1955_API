var mongoose = require('mongoose');
// ******************** Define Schema *******************
var PersonSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3}
}, {timestamps: true});
// ******************** Register the schema as a model *******************
var Person = mongoose.model('Person', PersonSchema);
