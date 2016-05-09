/**
 * @description [MainController]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
angular.module('app').controller('AppInfoController', ['$scope', 'appInfoService', function($scope, appInfoService) {

    appInfoService.success(function (data) {
        $scope.apps = data;
    });

}]);