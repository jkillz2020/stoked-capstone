"use strict";

app.factory('PlacesFactory', function($q, $http, FIREBASE_CONFIG, PLACES_API_CONFIG){

  var getPlaces=function(searchInfo){
    return $q((resolve, reject)=>{
      $http.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchInfo}&key=${PLACES_API_CONFIG.client_secret}`)
        .success(function(response){
          resolve(response);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        })
      })
    }
  
return {getPlaces: getPlaces
}
});