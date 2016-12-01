var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/static"))

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(request, response){
  response.setHeader('content-type', 'text/html');
  response.end(String((new Date()).getTime()/1000|0));
});

app.post('/hello', function(request, response) {
  response.setHeader('content-type', 'text/plain');
  response.end("universe\n");
});

app.use(function(request, response){
  response.setHeader('content-type', 'text/plain');
  response.end("not found\n");
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.listen(8000, function(){
  console.log("listening to port 8000");
})
