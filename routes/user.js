module.exports = function(app){
	var user = app.controllers.user;

	app.route('/api/login')
		.get(user.login);
	
}