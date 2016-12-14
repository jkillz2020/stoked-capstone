"use strict";

app.controller("PlacesApiCtrl", function($scope, $rootScope, $routeParams, PlacesFactory){
  let searchInfo = $scope.input
  $scope.getPlaces = function(searchInfo){
    PlacesFactory.getPlaces(searchInfo).then(function(response){
      console.log("searchInfo passed into function", searchInfo);
    $scope.placeInfo = response.results; 
    console.log("placeInfo", $scope.placeInfo);
    })
   console.log("searchInfo", searchInfo);
  };

  // getPlaces();
})