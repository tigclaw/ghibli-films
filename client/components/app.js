angular.module('app')

  .controller('AppCtrl', function (apiService) {

    // Define variables
    this.categoryReference = {
      Title: 'title',
      Year: 'release_date',
      Director: 'director',
      Producer: 'producer',
      Score: 'rt_score',
      Description: 'description',
    };
    this.isDoneLoading = false;
    this.sortType = this.categoryReference.Year;
    this.sortReverse = false;
    this.searchText = '';
    this.categories = Object.keys(this.categoryReference);

    // Define methods
    this.setSortCategory = (category) => {
      if (this.categoryReference[category] !== this.sortType) {
        this.sortReverse = false;
        this.sortType = this.categoryReference[category];
      } else {
        this.toggleSortReverse();
      }
    };

    this.toggleSortReverse = () => {
      // console.log('Toggling sort reverse');
      this.sortReverse = !this.sortReverse;
    };

    this.setSearchText = (text) => {
      console.log('Setting search ->', text);
      this.searchText = text;
    };

    this.getSelectedText = () => {
      if (this.dropdownFilter !== undefined) {
        this.setSortCategory(this.dropdownFilter);
        return this.dropdownFilter;
      }
      return 'Sort by';
    };

    // To run when component is loaded
    apiService.fetchData()
      .success((data) => {
        // console.log('data', data);
        this.films = data;
        for (var item of this.films) {
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
