(function() {
    'use strict'
    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/');

        $stateProvider


            .state('home', {
            url: '/',
            templateUrl: 'src/Template/Home.Template.html'
        })


        .state('categories', {

            url: '/categories',
            templateUrl: 'src/Template/Categories.Template.html',
            controller: 'CategoriesController as categories',
            resolve: {
                items: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{ShortName}',
            templateUrl: 'src/Template/Item.Template.html',
            controller: "ItemController as ItemControl",
            resolve: {
                details: ['$stateParams', 'MenuDataService',
                    function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.ShortName);
                    }
                ]
            }
        });

    }

})();