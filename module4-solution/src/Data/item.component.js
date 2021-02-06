(function() {
    'use strict';

    angular.module('data')
        .component('itemList', {
            templateUrl: 'src/Template/ItemList.Template.html',
            bindings: {
                details: '<'
            }
        });

})();