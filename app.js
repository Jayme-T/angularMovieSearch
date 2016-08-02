'use strict';
var app=angular.module('movies',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl:'partials/home.html',
    controller:'controller',
    controllerAs:'c'
  })
  .when('/:id/show', {
    templateUrl:'partials/movie.html',
    controller:'movie',
    controllerAs:'mv'
  })
  .otherwise({
            redirectTo: '/'
        });
}]);
