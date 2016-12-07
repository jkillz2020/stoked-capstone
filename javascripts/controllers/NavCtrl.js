"use strict";

app.controller('NavCtrl', function($scope){
  $scope.navItems = [
    {
      name:"Logout",
      url: "#/logout"
    }, 
    {
      name:"My Stokes",
      url:"#/stokes/list"
    }, 
    {
      name:"New Stoke",
      url: "#/stokes/new"
    }
  ];
});