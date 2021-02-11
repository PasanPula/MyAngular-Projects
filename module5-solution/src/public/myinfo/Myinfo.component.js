(function() {
    "use strict";

    angular.module('public')
        .component('myInfo', {
            templateUrl: 'src/public/myinfo/Myinfo.component.html',
            bindings: {
                regdata: '<',
                catdata: '<'
            },
            controller: infoComponentController
        });



    infoComponentController.$inject = ['ApiPath'];

    function infoComponentController(ApiPath) {

        this.Path = ApiPath;
        // this.category = this.catdata.short_name.replace(/[0-9]/g, '');
    }

})();