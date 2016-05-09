/**
 * @description [homeController]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
angular.module('app').controller('HomeController', ['$scope', 'photos', function($scope, photos) {
    photos.success(function(data) {
        $scope.photos = data;
    });
}]);