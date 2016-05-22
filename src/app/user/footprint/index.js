/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';

export default angular
    .module('app.user.footprint', [])
    .config(config)
    .name;


function config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('user.footprint', {
            url: '/footprint',
            views: {
                'content@user': {
                    templateUrl: './app/user/footprint/index.html'
                },
                'thumbList@user.footprint': {
                    templateUrl: './app/user/tpl/thumbList.html'
                },
                'detailList@user.footprint': {
                    templateUrl: './app/user/tpl/detailList.html'
                }
            },
            title: '我的足迹'
        });
}