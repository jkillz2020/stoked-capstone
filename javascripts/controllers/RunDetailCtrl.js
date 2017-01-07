"use strict";

app.controller('RunDetailCtrl', function($scope, $routeParams, $rootScope, RunFactory){
  $scope.selectedRun = {};
  let runId = $routeParams.id;

  RunFactory.getSingleRun(runId).then(function(oneRun){
    oneRun.id=runId
    $scope.selectedRun = oneRun;
    })
  })