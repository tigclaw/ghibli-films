angular.module('app')

  .controller('TableCtrl', function () {


  })

  .component('tableInfo', {
    templateUrl: '/templates/tableInfo.html',
    bindings: {
      films: '<',
      isDoneLoading: '<',
      sortBy: '&',
    },
    controller: 'TableCtrl',
    controllerAs: 'TableCtrl',
  });
