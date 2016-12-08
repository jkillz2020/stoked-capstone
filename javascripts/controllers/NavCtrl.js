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
      name:"New Resort",
      url: "#/resorts/new"
    },
    {
      name:"Get Snow Report",
      url: "#/resorts/snowreport"
    },
    {
      name:"Edit Resort",
      url: "#/resorts/edit"
    }
  ];
});