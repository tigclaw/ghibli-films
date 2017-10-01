angular.module('app')

  .controller('TableCtrl', function () {
    this.clickHeading = function (categoryName) {
      this.setSortCategory({ category: categoryName });
    };
  })

  .component('tableInfo', {
    templateUrl: '/templates/tableInfo.html',
    bindings: {
      films: '<',
      isDoneLoading: '<',
      setSortCategory: '&',
      sortType: '<',
      sortReverse: '<',
      searchText: '<',
    },
    controller: 'TableCtrl',
    controllerAs: 'TableCtrl',
  });
