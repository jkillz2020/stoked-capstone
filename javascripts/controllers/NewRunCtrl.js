"use strict";
app.controller("NewRunCtrl", function($scope, $location, $rootScope, $routeParams, RunFactory){
  $scope.newRun = {};

  $scope.addNewRun = function(){
    $scope.newRun.uid = $rootScope.user.uid;
    $scope.newRun.resortId = $routeParams.resortId;
    RunFactory.postNewRun($scope.newRun).then(function(runId){
      $location.url("/resorts/list");
    $scope.newRun= {};
    })
  }
})