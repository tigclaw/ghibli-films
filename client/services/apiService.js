angular.module('app')

  .service('apiService', function ($http, $q) {

    this.fetchData = function () {
      return $http.get('https://ghibliapi.herokuapp.com/films')
      .then(function(response) {
        return response.data;
      })
      .catch(function(response) {
        return $q.reject(`${response.status} ${response.statusText}`);
      })
    };
  });
