/**
 * @description [主入口文件]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from '../components';

import home from './home';
import user from './user';
import album from './album';
import resource from '../common/resources';


// 定义模块
angular
    .module('app', [
        uiRouter,
        components,
        home,
        album,
        user,
        resource
    ])
    .config(routerConfig)
    .run(runBlock);

function routerConfig($urlRouterProvider) {
    'ngInject';

    // 默认路由设置
    $urlRouterProvider.otherwise('/home');

    // 无视浏览器中 url末尾的"/"
    // 设置时 url, 末尾不要添加 "/"
    $urlRouterProvider.rule(($injector, $location) => {
        const path = $location.path(),
            hashTrailingSlash = path[path.length -1] === '/';

        if (hashTrailingSlash) {
            return path.slice(0, path.length -1);
        }
    });
}


function runBlock($rootScope, $state, $stateParams) {
    'ngInject';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}