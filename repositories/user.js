module.exports = function(app){
	var pg	= require('pg');
	var connectionString = 'postgres://postgres:123@localhost:5433/ProgramaTreinamento';

	var userRepository = {
		login: function(user, password){
			var results = [];

			pg.connect(connectionString, function(err, client, done) {
		        var query = client.query("SELECT * FROM usuario;", function(err, rows){
		        	if(err){
		        		console.log(err);
		        		client.end();
		        	}
		        	return rows.rows;
		        });
		    });
		}
	}

	return userRepository;
}