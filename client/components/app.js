angular.module('app')

  .controller('AppCtrl', function (apiService) {
    // DEFINE VARIABLES
    this.categoryReference = {
      Title: 'title',
      Year: 'release_date',
      Director: 'director',
      Producer: 'producer',
      Score: 'rt_score',
      Description: 'description',
    };
    this.categoryReferenceRev = {
      title: 'Title',
      release_date: 'Year',
      director: 'Director',
      producer: 'Producer',
      rt_score: 'Score',
      description: 'Description',
    };
    this.isDoneLoading = false;
    this.sortType = this.categoryReference.Year;
    this.sortReverse = false;
    this.searchText = '';
    this.categories = Object.keys(this.categoryReference);
    this.dropdownFilter = 'Year';

    // DEFINE METHODS
    this.setSortCategory = (category) => {
      if (category !== this.sortType) {
        this.sortReverse = false;
        this.sortType = category;
        this.dropdownFilter = this.categoryReferenceRev[this.sortType];
      } else {
        this.toggleSortReverse();
      }
    };

    this.toggleSortReverse = () => {
      // console.log('Toggling sort reverse');
      this.sortReverse = !this.sortReverse;
    };

    this.setSearchText = (text) => {
      // console.log('Setting search ->', text);
      this.searchText = text;
    };

    this.getSelectedText = () => {
      this.setSortCategory(this.categoryReference[this.dropdownFilter]);
      return this.dropdownFilter;
    };

    // RUNS WHEN COMPONENT IS LOADED
    apiService.fetchData()
      .success((data) => {
        // console.log('data', data);
        this.films = data;
        for (let item of this.films) {
          item.release_date = parseInt(item.release_date);
          item.rt_score = parseInt(item.rt_score);
        }
        this.isDoneLoading = true;
      })
      .error((error) => {
        alert(`Error downloading data: ${error}`);
        this.isDoneLoading = true;
      });
  })

  .component('app', {
    templateUrl: '/templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'AppCtrl',
  });
