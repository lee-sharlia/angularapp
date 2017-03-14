(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('states', state);

        function state() {
            function getStates() {
            };

            return {
                getStates: getStates
            }
        }

})();
