(function() {
    'use strict'
    angular.module("LunchCheck", []).controller("LunchCheckController", ControlFunc);
    ControlFunc.inject = ["$scope"]; //for minification

    function ControlFunc($scope) {
        $scope.InputField = "";
        $scope.ErrorMsg = "";
        $scope.Feedback = "";

        //check button function
        $scope.btnShow = function() {
            if ($scope.InputField == "") {
                $scope.ErrorMsg = "Please enter data first";
                $scope.Feedback = "";
            } else {
                function RemoveEmpty(item) { //filter function
                    return (item !== "");
                }
                var StringArray = $scope.InputField.split(",").filter(RemoveEmpty); //implement filter to remove empty item
                if (StringArray.length <= 3) {
                    $scope.Feedback = "Enjoy!";
                    $scope.ErrorMsg = "";
                } else {
                    $scope.Feedback = "Too Much!";
                    $scope.ErrorMsg = "";
                }
            }
        }

    }
})();