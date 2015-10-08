
module.exports = {
	registerRoutes : function(app){
		app.get('/home',this.home);
	},
	home : function(req,res,next){
		res.render('home');
	}
}