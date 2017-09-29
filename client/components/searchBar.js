angular.module('app')

  .controller('SearchCtrl', function () {
    
  })

  .component('searchBar', {
    templateUrl: '/templates/searchBar.html',
    bindings: {
      updateSearch: '<',
    },
    controller: 'SearchCtrl',
    controllerAs: 'SearchCtrl',
  });
