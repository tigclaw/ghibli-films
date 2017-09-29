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

    // Define variables
    this.isDoneLoading = false;
    this.sortType = TableCategoryRef.Year;
    this.sortReverse = false;
    this.searchText = '';

    // Define methods
    this.setSortCategory = (category) => {
      console.log('Set sort category ->', category);
      this.sortType = TableCategoryRef[category];
    };

    this.toggleSortReverse = () => {
      console.log('Toggling sort reverse');
      this.sortReverse = !this.sortReverse;
    };

    this.setSearchText = (text) => {
      console.log('Setting search ->', text);
      this.searchText = text;
    };

    // To run when component is loaded
    apiService.fetchData()
      .success((data) => {
        console.log('data', data);
        this.films = data;
        this.isDoneLoading = true;
      })
      .error((error) => {
        alert(`Error connecting to data: ${error}`);
        this.isDoneLoading = true;
      });
  })

  .component('app', {
    templateUrl: '/templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'AppCtrl',
  });
