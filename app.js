var express		=	require('express'),
	app			=	express();

app.post('/', function(res, res) {
	res.render('index.html');
});

app.listen(process.env.PORT, process.env.IP);