var joinGame = angular.module("joinGame", []);
joinGame.controller('startJoining', function($scope,$http){
  $http.get('http://localhost:3000/api/game').success(function(data){
      $scope.players = data.players;
      $scope.selectedPlayers = new Array();
      for(var i=0; i< $scope.players.length;i++)
      {
        if(!$scope.players[i].joined)
        {
            $scope.selectedPlayers.push($scope.players[i]);
        }
      }
      $scope.playerSelect;
  });

  $scope.JoinGame = function(){
    player = $scope.playerSelect;
    if(player!==undefined)
    {
      console.log(player.name);
      $http.get('http://localhost:3000/api/player/'+player.order+'/join').success(function(){
          window.location.href='/game';
      });
    }
    else{
      alert("Please select a player!");
    }
  }
});
