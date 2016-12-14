"use strict";

app.controller("PlacesApiCtrl", function($scope, $rootScope, $routeParams, PlacesFactory){
  let searchInfo = $scope.input
  $scope.getPlaces = function(){
    PlacesFactory.getPlaces(searchInfo).then(function(response){
    $scope.placeInfo = response.results; 
    console.log("placeInfo", $scope.placeInfo);
    })
   console.log("searchInfo", searchInfo);
  };

  // getPlaces();
})