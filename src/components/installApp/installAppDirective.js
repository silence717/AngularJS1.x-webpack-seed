/**
 * @description [按钮指令]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */

export default function installApp() {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: './components/installApp/installApp.html',
        link: function(scope, element) {
            scope.buttonText = '安装',
            scope.installed = false,
            scope.download = function() {
                element.addClass('btn-active');
                if(scope.installed) {
                    scope.buttonText = '安装';
                    scope.installed = false;
                } else {
                    scope.buttonText = '卸载';
                    scope.installed = true
                }
            }
        }
    }
}