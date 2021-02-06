(function() {
    'use strict'
    angular.module('data').service('MenuDataService', MenuDataService).constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];



    function MenuDataService($http, ApiBasePath) {
        var h = this;

        h.getAllCategories = function() {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
        };

        this.getItemsForCategory = function(categoryShortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }


            });

            return response;
        }


    };

})()