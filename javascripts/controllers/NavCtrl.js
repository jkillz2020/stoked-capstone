"use strict";

app.controller('NavCtrl', function($scope){
  $scope.navItems = [
    {
      name:"Logout",
      url: "#/logout"
    }, 
    {
      name:"My Resorts",
      url:"#/resorts/list"
    }, 
    {
      name:"Find Resort",
      url: "#/resorts/places"
    }
  ];
});