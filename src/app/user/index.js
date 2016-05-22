/**
 * @description [资源模块入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';
import ResourceController from './ResourceCtrl';
import footprint from './footprint';
import baseInfo from './baseInfo';

export default angular
    .module('app.user', [
        footprint,
        baseInfo
    ])
    .config(config)
    .controller('ResourceController', ResourceController)
    .name;


function config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('user', {
            url: '/user',
            views: {
                '': {
                    templateUrl: './app/user/index.html'
                }
            },
            controller: 'resourceCtrl',
            title: '个人中心'
        });
}