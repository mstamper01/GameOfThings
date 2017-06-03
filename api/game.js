var isActive = false;
var players = undefined;
var topic = "";
var guesses = undefined;

module.exports.playerJoin = function(id, playersList){
  console.log("Player joined! " + id);
  console.log(playersList);
  playersList[id-1].joined=true;
}

module.exports.getNotJoined = function(id, playersList){
  var joined = new Array();
  for(var i=0; i<playersList.length;i++){
    var ifJoined = playersList[i].joined;
    if(ifJoined)
    {
      joined.push(playersList[i]);
    }
  }
}

module.exports.isActive = isActive;
module.exports.players = players;
module.exports.topic = topic;
module.exports.guesses = guesses;
