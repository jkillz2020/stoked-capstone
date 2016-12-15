"use strict";

app.controller("PlacesApiCtrl", function($scope, $rootScope, $routeParams, $location, PlacesFactory, ResortFactory){
  let searchInfo = $scope.input
  let placeInfo = {};
  $scope.getPlaces = function(searchInfo){
    PlacesFactory.getPlaces(searchInfo).then(function(response){
    $scope.placeInfo = response.results;
    placeInfo = response.results; 
    // console.log("scope.placeInfo", $scope.placeInfo);
    

    })
   console.log("searchInfo", searchInfo);
  };

  $scope.addNewFoundResort = function(){
    // $scope.newResort.uid = $rootScope.user.uid;
    let ApiResort = {
      uid: $rootScope.user.uid,
      address: placeInfo[0].formatted_address,
      resortName: placeInfo[0].name,
      rating: ""
    };
    // console.log("placeInfo", placeInfo);
    // console.log("ApiResort", ApiResort);
    ResortFactory.postNewResort(ApiResort).then(function(resortId){
      $location.url("/resorts/list");
    $scope.newResort= {};
    })
  }

  // getPlaces();
})

// resortName: newResort.resortName,
//           rating: newResort.rating,
//           // state: newResort.state,
//           address: newResort.streetAddress,
//           // zipcode: newResort.zipcode,
//           uid: newResort.uid