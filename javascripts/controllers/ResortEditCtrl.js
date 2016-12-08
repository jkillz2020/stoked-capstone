"use strict";

app.controller('ResortEditCtrl', function($scope, $routeParams, $location, ResortFactory){
  $scope.newResort = {};
  let resortId = $routeParams.id;
  
  ResortFactory.getSingleResort(resortId).then(function(oneResort){
    oneResort.id= resortId;
    $scope.newResort = oneResort;
  })

  $scope.addNewResort = function(){
    ResortFactory.editResort($scope.newResort).then(function(response){
      $scope.newResort={};
      $location.url("/resorts/list")
    })
  }
})