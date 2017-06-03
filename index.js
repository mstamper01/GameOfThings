const express = require('express');

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var game = require('./api/game.js');


app.use("/semantic", express.static(__dirname + '/semantic'));
app.use("/pics", express.static(__dirname + '/Pics'));
app.use("/angular", express.static(__dirname + '/Angular'));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/Pages/index.html');
});

app.get('/game', function(req, res){
  if(game.isActive)
  {
    res.sendFile(__dirname + '/Pages/game.html');
  }
  else{
    res.redirect('/');
  }
});
app.get('/join', function(req,res){
  if(game.isActive)
  {
    res.sendFile(__dirname + '/Pages/join.html');
  }
  else{
    res.redirect('/?game=false');
  }
});

app.get('/api/player/:id/join', function(req,res){
  game.playerJoin(req.params.id, game.players);
  res.send();
});

app.post('/api/game', function(req, res){
  game.isActive=true;
  game.players = req.body;
  console.log(game);
  res.send(game);
});
app.get('/api/game', function(req, res){
  res.send(game);
});

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});
