"use strict";

app.controller("StokeListCtrl", function($scope, $rootScope, StokedFactory){
  $scope.stokes = [];

  let getStokes = function(){
    StokedFactory.getStokeList($rootScope.user.uid).then(function(fbStokes){
      $scope.stokes=fbStokes;
    })
  }

  getStokes();

  $scope.deleteStoke = function(stokeId){
    console.log("you deleted a stoke", stokeId);
    StokedFactory.deleteStoke(stokeId).then(function(response){
      console.log("here now", response)
      getStokes();
    })
  }
})