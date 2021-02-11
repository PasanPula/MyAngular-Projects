(function() {
    "use strict";

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['menuItems', 'registerData'];

    function MyinfoController(menuItems, registerData) {

        var Myinfo = this;
        Myinfo.RegNow = false;
        Myinfo.Component = false;

        console.log("new service:", menuItems);

        if (registerData.length == 0) {
            Myinfo.RegNow = true;
        } else {
            Myinfo.infoControlData = registerData;
            Myinfo.catControlData = menuItems;
            Myinfo.Component = true;
        }

    }


})();