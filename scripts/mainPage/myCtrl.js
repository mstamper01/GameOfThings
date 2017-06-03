var gameApp = angular.module("gameApp", []);
gameApp.controller('gameCreator', function($scope,$http){
  $scope.createGame = function(){
    var table = document.getElementById('playersTable');
    var playerCount = table.rows.length-1;
    var players = new Array();
    var flag = true;
    for(var i=1;i<=playerCount;i++)
    {
      var playerName = document.getElementById('player'+i).value;
      var isReader = document.getElementById('player'+i+'reader').checked;

      if(playerName)
      {
        var player = {
          name: playerName,
          reader: isReader,
          order:i
        }
        players.push(player)
      }
      else{
        document.getElementById('player'+i+'row').className += " negative";
        flag = false;
      }
    }
    if(flag)
    {
      alert("Creating game!");
      console.log(players);
    }
    else{
      alert("Make sure every players name is filled in!");
    }
  }
});
