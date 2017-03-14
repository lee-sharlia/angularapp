(function() {

    'use strict';

    angular
        .module('formlyApp')
        .controller('MainController', MainController);

function MainController(state) {

    var vm = this;

    // The model object that we reference
    // on the  element in index.html
    vm.personal= {};

    // An array of our form fields with configuration
    // and options set. We make reference to this in
    // the 'fields' attribute on the  element
    vm.personalFields = [
        {
            key: 'first_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            }
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email',
                required: true
            }
        },
    ];
    {
        key: 'over18',
        type: 'checkbox',
        templateOptions: {
            label: 'Are you over 18?',
        },
        // Hide this field if we don't have
        // any valid input in the email field
        hideExpression: '!model.email'
    },
})();
