angular.module('app')

  .service('apiService', function ($http) {

    this.fetchData = function () {
      return $http.get('https://ghibliapi.herokuapp.com/films');
    };
  });
