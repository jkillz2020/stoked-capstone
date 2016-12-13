"use strict";

app.controller("ResortListCtrl", function($scope, $rootScope, $location, SnowRptFactory, ResortFactory){
  $scope.resorts = [];

  let getResorts = function(){
    ResortFactory.getResortList($rootScope.user.uid).then(function(fbResorts){
      $scope.resorts=fbResorts;
    })
  }

  getResorts();

$scope.selectedCity = {};

  let getSnowRpt = function(){
      $scope.selectedCity = cityName;
    SnowRptFactory.getSnowReport(cityName).then(function(){
      $scope.go = function ( path ) {
      $location.path( path );
    }
  })
}

  $scope.deleteResort = function(resortId){
    console.log("you deleted a resort", resortId);
    ResortFactory.deleteResort(resortId).then(function(response){
      console.log("here now", response)
      getResorts();
    })
  }
})