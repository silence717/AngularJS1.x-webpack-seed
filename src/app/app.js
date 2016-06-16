/**
 * @description [主入口文件]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import components from '../components';

import home from './home';
import user from './user';
import album from './album';
import resource from '../common/resources';

import {routerConfig} from './config';


// 定义模块
angular
    .module('app', [
        uiRouter,
        ngResource,
        components,
        home,
        album,
        user,
        resource
    ])
    .config(routerConfig)
    .run(runBlock);

function runBlock($rootScope, $state, $stateParams) {
    'ngInject';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // stateChangeStart($rootScope);
    // stateChangeError($rootScope);
    // stateChangeSuccess($rootScope);
}
// stateChangeStart
// function stateChangeStart($rootScope) {
//     $rootScope.$on('$stateChangeStart',
//         (event, toState, toParams, fromState, fromParams) => {
//             // event.preventDefault();
//             console.log('开始改变=====');
//             console.log(toState);
//             console.log(toParams);
//             console.log(fromState);
//             console.log(fromParams);
//         });
// }
// stateChangeError
// function stateChangeError($rootScope) {
//     $rootScope.$on('$stateChangeError',
//         (event, toState, toParams, fromState, fromParams, error) => {
//             // event.preventDefault();
//             console.log('出错了=====');
//             console.log(toState);
//             console.log(toParams);
//             console.log(fromState);
//             console.log(fromParams);
//             console.log(error);
//         });
// }
// stateChangeError
// function stateChangeSuccess($rootScope) {
//     $rootScope.$on('$stateChangeSuccess',
//         (event, toState, toParams, fromState, fromParams) => {
//             // event.preventDefault();
//             console.log('成功了=====');
//             console.log(toState);
//             console.log(toParams);
//             console.log(fromState);
//             console.log(fromParams);
//         });
// }
