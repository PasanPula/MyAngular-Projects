(function() {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['SignupService'];

    function SignupController(SignupService) {

        var SignupControll = this;

        SignupControll.fname = '';
        SignupControll.lname = '';
        SignupControll.email = '';
        SignupControll.phone = '';
        SignupControll.fdish = '';

        SignupControll.sucess = false;

        SignupControll.submit = function() {
            SignupService.addUser(SignupControll.fname, SignupControll.lname, SignupControll.email, SignupControll.phone, SignupControll.fdish.toUpperCase());
            SignupControll.sucess = true;
        }

    }


})();