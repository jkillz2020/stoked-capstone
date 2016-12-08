"use strict";
app.controller("NewRunCtrl", function($scope, $location, $rootScope, RunFactory){
  $scope.newRun = {};

  $scope.addNewRun = function(){
    $scope.newRun.uid = $rootScope.user.uid;
    RunFactory.postNewRun($scope.newRun).then(function(runId){
      $location.url("/resorts/list");
    $scope.newRun= {};
    })
  }
})