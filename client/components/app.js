const TableCategoryRef = {
  Title: 'title',
  Year: 'release_date',
  Director: 'director',
  Producer: 'producer',
  Score: 'rt_score',
  Description: 'description',
};

angular.module('app')

  .controller('AppCtrl', function (apiService) {
    this.isDoneLoading = false;
    this.sortType = 'title';
    this.sortReverse = false;
    this.searchTerm = '';

    apiService.fetchData()
      .success((data) => {
        this.films = data;
        this.isDoneLoading = true;
      })
      .error((error) => {
        alert(`Error connecting to data: ${error}`);
        this.isDoneLoading = true;
      });

    this.setSortCategory = function (category) {
      console.log('set sort', category);
      this.sortType = TableCategoryRef[category];
    };

    this.toggleSortReverse = function () {
      console.log('toggling sort reverse');
      this.sortReverse = !this.sortReverse;
    };
  })

  .component('app', {
    templateUrl: '/templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'AppCtrl',
  });
