"use strict";

app.controller("SnowRptCtrl", function($scope, $rootScope, $routeParams, SnowRptFactory){
  // $scope.selectedCity = {};
  let zipcode = $routeParams.zipcode 
  console.log("zipcode", zipcode);
  let getSnowRpt = function(){
    SnowRptFactory.getSnowReport(zipcode).then(function(){
    })
  }

  getSnowRpt();

})