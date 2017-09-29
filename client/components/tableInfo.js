angular.module('app')

  .controller('TableCtrl', function () {
    this.clickHeading = function (event) {
      this.setSortCategory({ category: event.currentTarget.textContent });
      this.toggleSortReverse();
    };
  })

  .component('tableInfo', {
    templateUrl: '/templates/tableInfo.html',
    bindings: {
      films: '<',
      isDoneLoading: '<',
      setSortCategory: '&',
      toggleSortReverse: '&',
      sortType: '<',
      sortReverse: '<',
      searchTerm: '<',
    },
    controller: 'TableCtrl',
    controllerAs: 'TableCtrl',
  });
