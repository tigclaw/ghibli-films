angular.module('app')

  .component('tableInfo', {
    templateUrl: '/templates/tableInfo.html',
    bindings: {
      films: '<',
    },
    // controller: 'DisplayCtrl',
    // controllerAs: 'DisplayCtrl',
  });
