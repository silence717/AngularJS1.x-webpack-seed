/**
 * @description [appInfo指令]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
angular.module('app').directive('appInfo', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/appInfo/appInfo.html'
    }
});