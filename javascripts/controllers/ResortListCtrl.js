"use strict";

app.controller("ResortListCtrl", function($scope, $rootScope, ResortFactory){
  $scope.resorts = [];

  let getResorts = function(){
    ResortFactory.getResortList($rootScope.user.uid).then(function(fbResorts){
      $scope.resorts=fbResorts;
    })
  }

  getResorts();

  $scope.deleteResort = function(resortId){
    console.log("you deleted a resort", resortId);
    ResortFactory.deleteResort(resortId).then(function(response){
      console.log("here now", response)
      getResorts();
    })
  }
})