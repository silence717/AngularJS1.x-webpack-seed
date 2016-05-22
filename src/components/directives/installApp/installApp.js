/**
 * @description [按钮指令]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
angular.module('app').directive('installApp', function(){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/installApp/installApp.html',
        link: function(scope, element) {
            scope.buttonText = 'Install',
            scope.installed = false,
            scope.download = function() {
                element.toggleClass('btn-active');
                if(scope.installed) {
                    scope.buttonText = 'Installed';
                    scope.installed = false;
                } else {
                    scope.buttonText = 'Uninstalled';
                    scope.installed = true
                }
            }
        }
    }
});