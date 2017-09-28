angular.module('app')

  .controller('AppCtrl', function (apiService) {

    const fetchedPromise = apiService.fetchData();
    fetchedPromise
      .success((data) => {
        console.log('data returned', data);
        this.films = data;
      })
      .error((error) => {
        console.log('ERROR Getting', error);
      });
  })

  .component('app', {
    templateUrl: '/templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'AppCtrl',
  });
