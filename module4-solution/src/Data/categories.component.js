(function() {
    'use strict';

    angular.module('data')
        .component('categoriesList', {
            templateUrl: 'src/Template/CategoriesList.Template.html',
            bindings: {
                items: '<'
            }
        });

})();