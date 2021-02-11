(function() {
    "use strict";

    angular.module('public')
        .directive('menuExist', menuExist);

    menuExist.$inject = ['ApiPath', '$http', '$q'];

    function menuExist(ApiPath, $http, $q) {

        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$asyncValidators.menuExist = function(modelValue, viewValue) {
                    return $http({
                        method: "GET",
                        url: (ApiPath + "/menu_items/" + viewValue.toUpperCase() + ".json")
                    }).then(
                        function(response) {
                            if (response.data != "") {
                                return true;
                            }
                            return $q.reject();
                        }
                    );
                };
            }
        };
    }


})();