const express = require('express');

const app = express();

app.use("/semantic", express.static(__dirname + '/semantic'));
app.use("/pics", express.static(__dirname + '/Pics'));
app.use("/angular", express.static(__dirname + '/Angular'));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/Pages/index.html');
});

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});
