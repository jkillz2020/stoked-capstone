"use strict";

app.controller("SnowRptCtrl", function($scope, $rootScope, $routeParams, SnowRptFactory){
  let zipcode = $routeParams.zipcode 
  let getSnowRpt = function(){
    SnowRptFactory.getSnowReport(zipcode).then(function(response){
    $scope.weatherInfo = response.forecast.simpleforecast.forecastday; 
    console.log("weatherInfo", $scope.weatherInfo);
    })
  }

  getSnowRpt();
})