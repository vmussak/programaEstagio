module.exports = function(app){
	var userRepository = app.repositories.user;
	var userController = {
		login: function(req, res){

			var user = req.headers["user"];
			var password = req.headers["password"];

			var response = userRepository.login(user, password);

			console.log(response);

			res.json(response);
		}
	}

	return userController;
}