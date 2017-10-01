angular.module('app')

  .controller('TableCtrl', function () {
    this.currentHover = '';

    this.clickHeading = function (categoryName) {
      this.setSortCategory({ category: categoryName });
    };

    this.setCurrentHover = (category) => {
      this.currentHover = category;
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
