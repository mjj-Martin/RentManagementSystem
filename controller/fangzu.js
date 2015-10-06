
exports = {
	fangzuRoutes : function(app){
		app.get('/home',this.home);
	},
	home : function(res,req.next){
		res.render('page1');
	}
}