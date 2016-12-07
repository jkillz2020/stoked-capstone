"use strict";

app.controller('StokeEditCtrl', function($scope, $routeParams, $location, StokedFactory){
  $scope.newStoke = {};
  let stokeId = $routeParams.id;
  
  StokedFactory.getSingleStoke(stokeId).then(function(oneStoke){
    oneStoke.id= stokeId;
    $scope.newStoke = oneStoke;
  })

  $scope.addNewStoke = function(){
    StokedFactory.editStoke($scope.newStoke).then(function(response){
      $scope.newStoke={};
      $location.url("/stokes/list")
    })
  }
})