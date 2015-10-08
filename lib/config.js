var config = {

	PATH : 'http://localhost:3001/',
	IMGPATH : 'http://localhost:3001',
	CSSPATH : '',
	STATIC : 'http://localhost:3001/public'
}

exports.statice = function(name){
	return config.STATIC + name;
}