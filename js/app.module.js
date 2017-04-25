var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'home'
        })
        .when('/test', {
            templateUrl: 'pages/test.html',
            controller: 'test'
        })
        .when('/registration', {
            templateUrl: 'pages/rigistration.html',
            controller: 'registration'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contact'
        });
});


    







