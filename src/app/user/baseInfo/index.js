/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';

export default angular
    .module('app.user.baseInfo', [])
    .config(config)
    .name;

function config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('user.baseInfo', {
            url: '/baseInfo',
            views: {
                'content@user': {
                    templateUrl: './app/user/baseInfo/index.html'
                }
            }
        });
}