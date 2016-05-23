/**
 * @description [appInfo指令]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */

export default function appInfo() {

    return {
        restrict: 'E' ,
        scope: {
            info: '='
        } ,
        templateUrl: './components/appInfo/appInfo.html'
    };
}