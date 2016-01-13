var Todo = require('./../models/todo_model');

module.exports = function(app){

	app.get('/api/todos', function( req, res ){
		Todo.find(function(err, todos){
			if(err) { res.send(err); }
			res.json(todos);
		});
	});

	app.post('/api/todos', function( req, res ){
		Todo.create({
			todo : req.body.todo
		}, function(err, todo){
			if(err) { res.send(err); }
			Todo.find(function(err, todos){
				if(err) { res.send(err); }
				res.json(todos);
			});
		});
	});

	app.put('/api/todos/:todo_id', function( req, res ){
		Todo.findById(req.params.todo_id, function(err, todo){
			todo.completed = !todo.completed
			todo.save(function(err, todo){
				if(err) { res.send(err); }
				Todo.find(function(err, todos){
					if(err) { res.send(err); }
					res.json(todos);
				});
			});
		});
	});

	app.delete('/api/todos/:todo_id', function( req, res ){
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todos){
				if(err) { res.send(err); }
				Todo.find(function(err, todos){
					if(err) { res.send(err); }
					res.json(todos);
				});
			});
	});

}