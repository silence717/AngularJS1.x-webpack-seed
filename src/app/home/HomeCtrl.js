/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-19
 */
import {appResource} from '../../common/resources';

export default class HomeController {
    constructor() {
        this.apps = appResource;
    }
}

// angular.module('app').controller('AppInfoController', ['$scope', 'appInfoService', function($scope, appInfoService) {
//
//     appInfoService.success(function (data) {
//         $scope.apps = data;
//     });
//
// }]);