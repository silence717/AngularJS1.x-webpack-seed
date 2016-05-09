/**
 * @description [路由配置]
 * @author [silence_yfang@126.com]
 * @date  2016-05-09
 */
var angular = require('angular');
var ngRoute = require('angular-route');

var app = angular.module('app', [ngRoute]);

require('./js/services/appInfoService');
require('./js/services/photoService');
require('./js/directives/appInfo/appInfo');
require('./js/directives/installApp/installApp');

require('./js/controllers/HomeController');
require('./js/controllers/PhotoController');
require('./js/controllers/AppInfoController');


app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        controller: 'HomeController',
        templateUrl: 'view/home.html'
    })
    .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'view/photo.html'
    })
    .when('/forecast', {
        controller: 'AppInfoController',
        templateUrl: 'view/app.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
});
