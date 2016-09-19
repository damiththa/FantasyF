(function () {
    "use strict";   
    var NFLService = function ($http) { 
        return {
            getThisPosition: function(NFLSecret, thisPosition){
                var cacheData = {};
                if(!cacheData[thisPosition]) {
                    cacheData[thisPosition] = $http.get(NFLSecret.url, {                    
                        cache: true,
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        params: {
                            position : thisPosition,
                            count : 25
                        }
                    }).then(function(response) {
                        return response.data;
                    });
                }
                return cacheData[thisPosition];
            }

        };
    };
    
    NFLService.$inject = ['$http'];
    
    angular.module('appFantasyF')
	  .service('NFLService', NFLService);
    
}());