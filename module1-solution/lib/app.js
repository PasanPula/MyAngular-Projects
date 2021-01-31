(function() {
    'use strict'
    angular.module("LunchCheck", []).controller("LunchCheckController", ControlFunc);
    ControlFunc.inject = ["$scope"]; //for minification

    function ControlFunc($scope) {
        $scope.InputField = "";

        //Old Code bindings
        // $scope.ErrorMsg = "";
        //  $scope.Feedback = "";

        //nnew code bindings
        $scope.checked = false;
        $scope.message = "";

        //check button function
        $scope.btnShow = function() {

            function RemoveEmpty(item) { //filter function
                return (item !== "");
            }
            var StringArray = $scope.InputField.split(",").filter(RemoveEmpty); //implement filter to remove empty item


            if (StringArray.length == 0) {

                // Old Code 
                // $scope.ErrorMsg = "Please enter data first";
                // $scope.Feedback = "";

                //new Code bindings
                $scope.empty = true;

            } else {
                //new code
                $scope.checked = true;
                $scope.empty = false;


                if (StringArray.length <= 3) {
                    // old code
                    // $scope.Feedback = "Enjoy!";
                    // $scope.ErrorMsg = "";

                    //New code
                    $scope.message = "Enjoy !"

                } else {

                    // old code
                    // $scope.Feedback = "Too Much!";
                    // $scope.ErrorMsg = "";

                    //New code
                    $scope.message = "TooMuch !"
                }
            }
        }

    }
})();