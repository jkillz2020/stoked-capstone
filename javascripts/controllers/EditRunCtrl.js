"use strict";

app.controller('EditRunCtrl', function($scope, $routeParams, $location, RunFactory){
  $scope.newRun = {};
  let runId = $routeParams.id;
  
  RunFactory.getSingleRun(runId).then(function(oneRun){
    oneRun.id= runId;
    $scope.newRun = oneRun;
  })

  $scope.addNewRun = function(){
    RunFactory.editRun($scope.newRun).then(function(response){
      $scope.newRun={};
      $location.url("/resorts/list")
    })
  }
})