"use strict";

app.factory('SnowRptFactory', function($q, $http, FIREBASE_CONFIG, WEATHER_API_CONFIG){

  var getSnowReport=function(zipcode){
    // console.log("zipcode from API", zipcode);
    return $q((resolve, reject)=>{
      $http.get(`http://api.wunderground.com/api/${WEATHER_API_CONFIG.client_secret}/forecast/q/${zipcode}/query.json`)
        .success(function(response){
          console.log("response", response)
          // let run =[];
          // Object.keys(response).forEach(function(key){
          //   response[key].id=key;
          //   run.push(response[key]);
          // });
          resolve(zipcode);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
      })
    }
  
return {getSnowReport: getSnowReport
}
});

// let snowReport = (zipText) =>{
//   return new Promise((resolve, reject) =>{
//     $.ajax({
//       method: 'GET',
//       url: 'apikeys.json'
//     }).then(response =>{
//       console.log('response', response);
//       apiKeys = response;
//       //let authHeader = "Client-ID " + apiKeys.client_id;

// $.ajax({
//   method: 'GET',
//   url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipText},us&units=imperial&&APPID=5ab34be0357b9aa13610f7a9816381a4`
// }).then( (response2)=>{
//   resolve(response2);
// }, (errorResponse2)=>{
//   console.log('weather fail', errorResponse2);
//   reject(errorResponse2);
// }, (errorResponse)=>{
//       console.log('errorResponse', errorResponse);
//     });
//   });
// });
// };