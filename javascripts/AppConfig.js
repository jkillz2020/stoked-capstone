"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=> {
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
})

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

    let logged = AuthFactory.isAuthenticated();
    let appAd;

    if(currRoute.originalPath){
      appAd = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    if(!appAd && !logged){
      event.preventDefault();
      $location.path("/auth");
    }
  })
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/resorts/list', {
      templateUrl: 'partials/resort-list.html',
      controller: 'ResortListCtrl',
      resolve: {isAuth}
    })
    .when('/resorts/new', {
      templateUrl: 'partials/new-resort.html',
      controller: 'NewResortCtrl',
      resolve: {isAuth}
    })
    .when('/resorts/new-run', {
      templateUrl: 'partials/new-run.html',
      controller: 'NewRunCtrl',
      resolve: {isAuth}
    })
    .when('/resorts/snowreport', {
      templateUrl: 'partials/snow-rpt.html',
      controller: 'SnowRptCtrl',
      resolve: {isAuth}
    })
    .when('/resorts/view/:id', {
      templateUrl: 'partials/resort-view.html',
      controller: 'ResortDetailCtrl',
      resolve: {isAuth}
    })
    .when('/runs/view/:id', {
      templateUrl: 'partials/run-view.html',
      controller: 'RunDetailCtrl',
      resolve: {isAuth}
    })
    .when('/resorts/edit/:id', {
      templateUrl: 'partials/new-resort.html',
      controller: 'ResortEditCtrl',
      resolve: {isAuth}
    })
    .when('/runs/edit/:id', {
      templateUrl: 'partials/new-run.html',
      controller: 'EditRunCtrl',
      resolve: {isAuth}
    })
    .when('/logout', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl',
      resolve: {isAuth}
    })
    .otherwise('/auth')
})