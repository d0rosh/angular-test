var app = angular.module('app',['ngRoute','ngSanitize']);


app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/',{
        templateUrl: '/all-posts.html',
        controller: 'mainCtrl',
        controllerAs: 'ctrl'
   });
	$routeProvider.when('/post/:id',{
        templateUrl: '/post.html',
        controller: 'postCtrl',
        controllerAs: 'ctrl'
   });
});

