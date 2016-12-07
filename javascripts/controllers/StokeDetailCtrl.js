"use strict";

app.controller('StokeDetailCtrl', function($scope, $routeParams, StokedFactory){
  $scope.selectedStoke = {};
  let stokeId = $routeParams.id;

  StokedFactory.getSingleStoke(stokeId).then(function(oneStoke){
    oneStoke.id=stokeId
    $scope.selectedStoke = oneStoke;
  })
})