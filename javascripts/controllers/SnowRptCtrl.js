"use strict";

app.controller("SnowRptCtrl", function($scope, $rootScope, $routeParams, SnowRptFactory){
  let zipcode = $routeParams.zipcode 
  console.log("zipcode", zipcode);
  let getSnowRpt = function(){
    SnowRptFactory.getSnowReport(zipcode).then(function(response){
      console.log("Snow reprt Factory", SnowRptFactory);
    $scope.weatherInfo = response.forecast.simpleforecast.forecastday; 
    console.log("weatherInfo", $scope.weatherInfo);
    })
  }

  getSnowRpt();
})