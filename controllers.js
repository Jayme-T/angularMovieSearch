'use strict';
app.controller('controller', ['$http','movieService', function($http, movieService){
  var vm=this;
  vm.find=function(searchby){
    vm.getMovies= movieService.getMovies(searchby);
    // console.log(vm.getMovies);
  };
vm.find=function(searchby){
$http.get('http://www.omdbapi.com/?s=' +searchby)
.then(function(data){
  vm.data=data.data.Search;
  // console.log(vm.data);
})
.catch(function(error){
  vm.error=error;
  // console.log(vm.error);
});
};
}]);
app.controller('movie', ['$http', 'movieService', '$routeParams', function($http, movieService, $routeParams){
  var vm=this;
console.log($routeParams);
  $http.get('http://www.omdbapi.com/?i='+ $routeParams.id)
  .then(function(data){
    console.log(data.data);
    vm.data=data.data;
  })
  .catch(function(error){
    return error;
  });
// };
  // console.log($routeParams);
  // vm.test=function(){
  //   var movieId=$routeParams;
  //
  //   vm.findMovie=movieService.findMovie(movieId);
// };
}]);



// vm.movie=function(movieID){
//   $http.get('http://www.omdbapi.com/?i=' + movieID)
//   .then(function(data){
//     vm.movie=data.data;
//     console.log(vm.movie);
//   });
// };
