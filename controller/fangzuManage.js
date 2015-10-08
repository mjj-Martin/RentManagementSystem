
module.exports = {
	registerRoutes : function(app){
		app.get('/fangzuManage',this.home);
		app.get('/fangzuManage/fangzuDetail',this.fangzuDetail);
	},
	home : function(req,res){
		res.render('fangzuManage/home');
	},
	fangzuDetail : function(req,res){
		res.render('fangzuManage/fangzuDetail');
	}
}