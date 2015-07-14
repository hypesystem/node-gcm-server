function variableSaver(variables) {
	return function(req, res, next) {
		req.vars = variables;
		next();
	};
}

module.exports = variableSaver;
