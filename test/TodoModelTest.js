var should = require('should'),
	Todo = require('../app/models/todo.model');


describe('Model testing for Todo api', function () {

	before(function (done) {
		fakeData = {
			todo : "Sample todo data"
		}	
		done();
	});

	it('Should return true if the Todo Model is defined', function () {
		// expect(Todo).to.exist;
	});

	it('Should not save todo if todo item is empty', function () {
		var newtodo = new Todo({todo: ""});
	});

	it('Should save todo if item has some value', function () {
		var newtodo = new Todo({todo: fakeData.todo});
		newtodo.save(function(err, todo){
		
		})
	});

});