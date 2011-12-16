
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

// app.get('/', routes.index);


app.get('/spotify-query', function(req, res){
    res.send('spotify query')
    var spotify = require('spotify');

spotify.search({ type: 'track', query: 'britney spears' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

console.dir(data.tracks[0].album.name)
// console.dir('show data')

    // Do something with 'data'
});

});



app.get('/',function(req,res){
  res.send('check console')


})


app.get('/spotify',routes.spotify)
app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
