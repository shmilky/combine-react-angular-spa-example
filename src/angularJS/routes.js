import angular from 'angular';
import './root.component.js';
import './messages.component.js';

angular
    .module('angularJS-app')
    .config(($stateProvider, $locationProvider) => {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });

        $stateProvider
            .state('root', {
                url: '/step-2',
                template: '<root />',
            })

            .state('root.showMessages', {
                url: '/show-messages',
                template: '<messages />',
            })
    });