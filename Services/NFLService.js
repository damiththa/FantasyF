(function () {
    "use strict";   
    var NFLService = function ($http, $cacheFactory) { 
        return {
            getThisPosition: function(NFLSecret, thisPosition){
                var cacheData = $cacheFactory(thisPosition);
                return $http.get(NFLSecret.url, {                    
                    cache: cacheData,
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    params: {
                        position : thisPosition,
                        count : 25
                    }
                });
            }
            
        };
    };
    
    NFLService.$inject = ['$http','$cacheFactory'];
    
    angular.module('appFantasyF')
	  .service('NFLService', NFLService);
    
}());