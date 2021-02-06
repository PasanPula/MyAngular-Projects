(function() {
    'use strict';

    angular.module('data')
        .controller('ItemController', ItemController);


    ItemController.$inject = ['details'];

    function ItemController(details) {

        var categoryDetail = details.data;
        this.detail = categoryDetail.menu_items;
        this.category = categoryDetail.category;



    }


})();