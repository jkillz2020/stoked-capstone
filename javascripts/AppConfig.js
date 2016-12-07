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
    .when('/stokes/list', {
      templateUrl: 'partials/stoke-list.html',
      controller: 'StokeListCtrl',
      resolve: {isAuth}
    })
    .when('/stokes/new', {
      templateUrl: 'partials/new-stoke.html',
      controller: 'NewStokeCtrl',
      resolve: {isAuth}
    })
    .when('/stokes/snowreport', {
      templateUrl: 'partials/snow-rpt.html',
      controller: 'SnowRptCtrl',
      resolve: {isAuth}
    })
    .when('/stokes/view/:id', {
      templateUrl: 'partials/stoke-view.html',
      controller: 'StokeDetailCtrl',
      resolve: {isAuth}
    })
    .when('/stokes/edit/:id', {
      templateUrl: 'partials/new-stoke.html',
      controller: 'StokeEditCtrl',
      resolve: {isAuth}
    })
    .when('/logout', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl',
      resolve: {isAuth}
    })
    .otherwise('/auth')
})