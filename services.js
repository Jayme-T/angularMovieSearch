'use strict';
app.service("movieService", ['$http',function($http){
  this.getMovies= function(searchby){
  $http.get('http://www.omdbapi.com/?s=' +searchby)
  .then(function(data){
    this.data=data.data.Search;
    // console.log(this.data);
  })
  .catch(function(error){
    return error;
    // console.log(this.error);
  });
  };
  this.findMovie=function(movieID){
    $http.get('http://www.omdbapi.com/?i='+ movieID)
    .then(function(data){
      console.log(data);
      this.data=data.data;
    })
    .catch(function(error){
      return error;
    });
  };
  }]);


// }]);
