(function () {
    "use strict";
    var PlayersController = function ($scope, SecretsService, NFLService) {    
        var Secret_return = SecretsService.getKeys();
        Secret_return.then(function(data){
            $scope.Secrets = data;
            $scope.FireBase_secrets = $scope.Secrets.data.urls.FireBase; //FireBase
            $scope.NFLPlayers_secrets = $scope.Secrets.data.urls.NFL_Players; //All NFL players, all positions

            $scope.getPlayers = function(position){ //Get NFL players accordingly
                var getNFLPlayers_ThisPosition = NFLService.getThisPosition($scope.NFLPlayers_secrets,position);
                getNFLPlayers_ThisPosition.then(function(data){
                    $scope.ThisPosition = data;
                    console.log($scope.ThisPosition);
                })         
            };

            //inti
            function init(){
                $scope.getPlayers('QB');    
            };
            init();
        });                  
    };
    
    PlayersController.$inject = ['$scope', 'SecretsService','NFLService'];
    
    angular.module('appFantasyF')
        .controller('PlayersController', PlayersController);    
}());