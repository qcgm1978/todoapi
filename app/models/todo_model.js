var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO schema

var TodoSchema = new Schema({
	todo: String,
	completed: { type:Boolean, default: false },
	created_by: { type: Date, default: Date.now }
});

var TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;