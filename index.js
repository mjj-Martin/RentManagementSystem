var express = require('express');
var handlebars = require('express3-handlebars').create({
		defaultLayout:'main',
		helpers : {
			section : function(name,options){
				if(!this._sections){
					this._sections = {};
				}
				this._sections[name] = options.fn(this);
				return null;
			},
			static : function(name){
				return require('./lib/config.js').statice(name);
			}
		}
		// extname : ".hbs"
	});

var port  = process.env.post || 3001;

var app = express();

app.engine('handlebars',handlebars.engine);
app.use(express.static('./'));
app.set("view engine",'handlebars');
app.set("port",port);

// 引入路由注册
require('./controller/home.js').registerRoutes(app);
require('./controller/dataAnalysis.js').registerRoutes(app);
require('./controller/fangzuManage.js').registerRoutes(app);


app.listen(3001);

console.log("已经打开端口为"+port);