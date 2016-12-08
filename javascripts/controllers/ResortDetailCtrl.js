"use strict";

app.controller('ResortDetailCtrl', function($scope, $routeParams, ResortFactory, RunFactory){
  $scope.selectedResort = {};
  let resortId = $routeParams.id;

  ResortFactory.getSingleResort(resortId).then(function(oneResort){
    oneResort.id=resortId
    $scope.selectedResort = oneResort;
  })
})