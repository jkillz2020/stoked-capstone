"use strict";

app.factory('SnowRptFactory', function($q, $http, FIREBASE_CONFIG, WEATHER_API_CONFIG){

  var getSnowReport=function(zipcode){
    return $q((resolve, reject)=>{
      $http.get(`http://api.wunderground.com/api/${WEATHER_API_CONFIG.client_secret}/forecast/q/${zipcode}/query.json`)
        .success(function(response){
          console.log("response", response)
          resolve(response);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
      })
    }
  
return {getSnowReport: getSnowReport
}
});

