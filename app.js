
/**
 * Module dependencies.
 */

var express = require('express');
var superagent = require('superagent');
var consolidate = require('consolidate');
var controller = require('./controllers');
var userController = require('./controllers/userController');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('7uc4nd1d470'));
app.use(express.session());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', controller.index);
app.get('/user', userController.validateSession, userController.getUserById);
app.post('/user', userController.logIn);


// API request for get the JSON
app.get('/candidatos', function(request, response) {
  superagent.get("http://congresovisible.org/api/apis/candidatos/")
    .set('Accept', 'application/json')
    .end(function(error, res) {
      if(error)
        next(error);
        console.log(res.body.results.length);
      return response.json({data: res.body});
    });
});

//DB connection
mongoose.connect('mongodb://localhost/Candidatos');
mongoose.connection.on('open', function() {
  console.log('conneected to Moongose');

  //seeder.check();
});

app.listen(3001);
/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/
