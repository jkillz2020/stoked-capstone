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
    },
    {
      name:"Get Snow Report",
      url: "#/stokes/snowreport"
    },
    {
      name:"Edit Stoke",
      url: "#/stokes/edit"
    }
  ];
});