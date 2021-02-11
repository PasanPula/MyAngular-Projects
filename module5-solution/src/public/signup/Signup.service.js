(function() {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);

    SignupService.$inject = ['ApiPath', '$http'];

    function SignupService(ApiPath, $http) {

        var service = this;

        var registered = [];

        service.addUser = function(Fname, Lname, Email, Pno, Fdish) {
            var item = {
                Firstname: Fname,
                Lastname: Lname,
                Email: Email,
                Phone: Pno,
                Category: Fdish
            };
            registered.push(item);
            console.log(registered);
        };

        service.getItems = function() {
            return registered;
        };

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                    method: "GET",
                    url: (ApiPath + "/menu_items/" + searchTerm + ".json")
                })
                .then(function(response) {
                    var data = response.data;
                    return data;
                });
        };

    }


})();