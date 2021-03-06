angular.module('app')

  .controller('AppCtrl', function (apiService) {
    // DEFINE VARIABLES
    this.categoryReference = {
      Title: 'title',
      Year: 'release_date',
      Director: 'director',
      Score: 'rt_score',
      Description: 'description',
    };
    this.categoryReferenceRev = {
      title: 'Title',
      release_date: 'Year',
      director: 'Director',
      rt_score: 'Score',
      description: 'Description',
    };
    this.isDoneLoading = false;
    this.sortType = this.categoryReference.Year;
    this.sortReverse = false;
    this.searchText = '';
    this.categories = Object.keys(this.categoryReference);
    this.dropdownFilter = this.categoryReferenceRev[this.sortType];

    // DEFINE METHODS
    this.setSortCategory = (category) => {
      if (category !== this.sortType) {
        this.sortType = category;
        this.dropdownFilter = this.categoryReferenceRev[this.sortType];
      } else {
        this.toggleSortReverse();
      }
    };

    this.toggleSortReverse = () => {
      this.sortReverse = !this.sortReverse;
    };

    this.setSearchText = (text) => {
      this.searchText = text;
    };

    this.getSelectedText = () => {
      this.setSortCategory(this.categoryReference[this.dropdownFilter]);
      return this.dropdownFilter;
    };

    this.$onInit = () => {
      apiService.fetchData()
        .then((data) => {
          this.films = data;
          for (const item of this.films) {
            item.release_date = parseInt(item.release_date);
            item.rt_score = parseInt(item.rt_score);
          }
          this.isDoneLoading = true;
        }, (error) => {
          alert(`Error downloading data: ${error}`);
          this.isDoneLoading = true;
        })
    };
  })

  .component('app', {
    templateUrl: '/templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'AppCtrl',
  });
