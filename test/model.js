var expect    = require("chai").expect;
var Todo = require('../app/models/todo_model');

describe('Model for application should be defined', function () {
	it('Todo Model should be defined', function (done) {
		// assert.isDefined(tea, 'Todo Model has been defined');
		expect(Todo).to.exist;
		done();
	});
});