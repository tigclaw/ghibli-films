angular.module('app')

  .controller('TableCtrl', () => {

  })

  .component('tableInfo', {
    templateUrl: '/templates/tableInfo.html',
    bindings: {
      films: '<',
    },
    controller: 'TableCtrl',
    controllerAs: 'TableCtrl',
  });
