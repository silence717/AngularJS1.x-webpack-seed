/**
 * @description [照片controller]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
angular.module('app').controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
    photos.success(function(data) {
        $scope.detail = data[$routeParams.id];
    });
}]);