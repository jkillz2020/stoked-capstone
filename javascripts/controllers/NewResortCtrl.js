"use strict";
app.controller("NewResortCtrl", function($scope, $location, $rootScope, ResortFactory){
  $scope.newResort = {};

  $scope.addNewResort = function(){
    $scope.newResort.uid = $rootScope.user.uid;
    ResortFactory.postNewResort($scope.newResort).then(function(resortId){
      $location.url("/resorts/list");
    $scope.newResort= {};
    })
  }
})