angular.module('app')

  .component('searchBar', {
    templateUrl: '/templates/searchBar.html',
    bindings: {
      updateSearch: '<',
    },
    controllerAs: 'SearchCtrl',
  });
