(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'NarrowItDownList.html',
            scope: {
                foundItem: '<',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'DirectiveController',
            bindToController: true
        };

        return ddo;
    };

    function NarrowItDownDirectiveController() {};


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {

        var controller = this;
        controller.SearchTerm = '';
        controller.error = false;
        controller.load = false;


        controller.SearchTermFunc = function() {

            if (this.SearchTerm != "") {
                controller.load = true;
                controller.error = false;
                var promise = MenuSearchService.getMatchedMenuItems(this.SearchTerm);


                promise.then(function(response) {
                        if (response == '') {
                            throw new Error();
                        } else {
                            controller.found = response;
                            controller.error = false;
                            controller.load = false;
                        }
                    })
                    .catch(function(error) {
                        controller.error = true;
                        controller.load = false;

                    });

            } else {
                controller.error = true;
                controller.load = false;
            }
        };

        controller.removeItem = function(index) {
            controller.found.splice(index, 1);
        }


    };

    MenuSearchService.$inject = ['$http', 'ApiBasePath']

    function MenuSearchService($http, ApiBasePath) {



        this.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(response) {

                var founditem = response.data.menu_items.filter(function(value) {
                    return value.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
                });
                return founditem;
            })
        };
    };

})();