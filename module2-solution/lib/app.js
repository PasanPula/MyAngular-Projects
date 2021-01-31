(function() {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {

        this.errorMessage = false;
        this.ShoppingList = ShoppingListCheckOffService.getShoppingList();
        this.checkShoppingList = function(index) {
            ShoppingListCheckOffService.checkShoppingList(index);
            if (this.ShoppingList == "") {
                this.errorMessage = true;

            }
        }
    };


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.BoughtList = function() {
            if (ShoppingListCheckOffService.getBoughtList().length == 0) {
                this.errorMessage = false;
            } else {
                this.errorMessage = true;
                return ShoppingListCheckOffService.getBoughtList();

            }

        }
    };


    function ShoppingListCheckOffService() {

        var ShoppingList = [{ name: "cookies", quantity: 10 }, { name: "cokes", quantity: 5 }, { name: "chips", quantity: 6 }, { name: "cakes", quantity: 20 }, { name: "pepsies", quantity: 50 }];
        var boughtList = [];

        this.getShoppingList = function() {
            return ShoppingList;
        };

        this.getBoughtList = function() {
            return boughtList;
        };

        this.checkShoppingList = function(index) {
            boughtList.push(ShoppingList[index]);
            ShoppingList.splice(index, 1);
        }

    }


})();