import angular from 'angular';
import template from './messages.template.html';

angular
    .module('angularJS-app')
    .component('messages', {
        template,
        controllerAs: 'vm',
        controller($http) {
            this.messages = window.sharedState.messages;
            const vm = this;

            $http
                .get('https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC')
                .then(response => {
                    vm.gifs = response.data.data;
                })
                .catch(err => {
                    setTimeout(() => {
                        throw err;
                    }, 0)
                });
        },
    });