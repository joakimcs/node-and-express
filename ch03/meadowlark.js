// Set up express framework
// Requires: npm install --save express
var express = require('express');

var app = express();

// Set up handlebars view engine
// Requires: npm install --save express3-handlebars
var handlebars = require('express3-handlebars')
	// Sets the 'main.handlebars' layout as default
	.create({defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Allows us to override default port 3000
app.set('port', process.env.PORT || 3000);

// Enable static middleware for serving static files
app.use(express.static(__dirname + '/public'));

// Test dynamic values
var fortuneCookies = [
	"Conquer your fears or they will conquer you.", 
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.", 
	"Whenever possible, keep it simple."
];

// ROUTES
app.get('/', function(req, res){
	res.render('home');
});
app.get('/about', function(req, res){
	var randomFortune = fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
	//var randomFortune = Math.floor(Math.random() * fortuneCookies.length);
	res.render('about', {fortune: randomFortune});
})


// Custom 404 page
app.use(function (req, res, next){
	res.status(404);
	res.render('404');
});

// Custom 500 page
app.use(function (req, res, res, next){
	console.error(err.stack);
	res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' +
		app.get('port') + 
		'; press Ctrl-C to terminate.');
})