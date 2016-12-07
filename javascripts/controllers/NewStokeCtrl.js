"use strict";
app.controller("NewStokeCtrl", function($scope, $location, $rootScope, StokedFactory){
  $scope.newContact = {};

  $scope.addNewStoke = function(){
    $scope.newStoke.uid = $rootScope.user.uid;
    StokedFactory.postNewStoke($scope.newStoke).then(function(stokeId){
      $location.url("/stokes/list");
    $scope.newStoke= {};
    })
  }
})