angular.module('app')

  .controller('AppCtrl', function (apiService) {
    this.isDoneLoading = false;
    const fetchedPromise = apiService.fetchData();

    // setTimeout(() => { 
    fetchedPromise
      .success((data) => {
        console.log('data returned', data);
        this.films = data;
        this.isDoneLoading = true;
      })
      .error((error) => {
        alert(`Error connecting to data: ${error}`);
        this.isDoneLoading = true;
      });
    // }, 3000);


    this.sortBy = function() {
      console.log('clicked sort');
    }
  })

  .component('app', {
    templateUrl: '/templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'AppCtrl',
  });
