var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var port  = process.env.post || 3001;

var app = express();

app.engine('handlebars',handlebars.engine);
// app.set('views','./views');
app.set("view engine",'handlebars');
app.set("port",port);

app.get('/',function(req,res){
	
	// res.type('text/html');
	// res.status(400)
	// res.send('调试成功');
})

app.listen(3001);

console.log("已经打开端口为"+port);