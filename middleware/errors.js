exports.notFound = function(req, res){
	res.status(404);
	res.json({
		error: 'Recurso não encontrado :('
	});
};

exports.serverError = function(err, req, res){
	res.status(err.status || 500);
	res.json({
		error: err.message
	});
};