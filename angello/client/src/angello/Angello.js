<!DOCTYPE HTML>
  var myModule = angular.module('Angello',
    [
      'ngRoute',
      'ngAnimate',
      'firebase',
      'ngMessasges',
      'Angello.Common',
      'Angello.Dashboard',
      'Angello.Login',
      'Angello.Storyboard',
      'Angello.User',
      'auth0',
      'angular-jwt',
      'angular-storage'
    ]);

myModule.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/angello/storyboard/tmpl/storyboard.html,
      controller: 'StoryboardCtrl',
      controlerAs: 'storyboard'
    })
    .when('/dashboard', {
      templateUrl: 'src/angello/dashboard/tmpl/dashboard.html',
      controller: 'DashboardCtrl',
      controllerAs: 'dashboard'
    })
    .when('/users', {
      templateUrl: 'src/angello/user/tmpl/user.html',
      controller: 'UsersCtrl',
      controllerAs: 'users'
    })
    .when('/users/:userId', {
      templateUrl: 'src/angello/user/tmpl/user.html',
      controller: 'UserCtrl',
      controllerAs: 'myUser'
    })
    .when('/login', {
      templateUrl: 'src/angello/login/tmpl/login.html',
      controller: 'UserCtrl',
      controllerAs: 'login'
    })
    .otherwise({redirectTo: '/'});
});
