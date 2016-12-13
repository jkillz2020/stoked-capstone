"use strict";

app.controller('ResortDetailCtrl', function($scope, $routeParams, $rootScope, ResortFactory, RunFactory){
  $scope.selectedResort = {};
  let resortId = $routeParams.id;

  ResortFactory.getSingleResort(resortId).then(function(oneResort){
    oneResort.id=resortId
    $scope.selectedResort = oneResort;
  })
  $scope.runs = [];


  let getRuns = function(){
    RunFactory.getRunList($rootScope.user.uid).then(function(fbRuns){
      $scope.runs = [];
      fbRuns.forEach(function(myRun){
      if(myRun.resortId == resortId){
        $scope.runs.push(myRun);
      }

      })
    })
  }

  getRuns();


  $scope.deleteRun = function(runId){
    console.log("you deleted a run", runId);
    RunFactory.deleteRun(runId).then(function(response){
      console.log("here now", response)
      getRuns();
    })
  }
})