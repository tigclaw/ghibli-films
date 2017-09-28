angular.module('app')

  .controller('AppController', () => {
    console.log('loaded app.js!');
  })

  .component('app', {
    templateUrl: '/templates/app.html',
    bindings: {

    },
    controller: 'AppController',
  });
