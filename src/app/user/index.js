/**
 * @description [资源模块入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import './user.css';

import angular from 'angular';
import footprint from './footprint';
import baseInfo from './baseInfo';
import {UserRouter, UserBaseInfoRouter, UserFootprintRouter} from './Routers';


export default angular
    .module('app.user', [
        footprint,
        baseInfo
    ])
    .config(config)
    .name;

function config($stateProvider) {
    'ngInject';

    $stateProvider.state(UserRouter.state, UserRouter.config);
    $stateProvider.state(UserBaseInfoRouter.state, UserBaseInfoRouter.config);
    $stateProvider.state(UserFootprintRouter.state, UserFootprintRouter.config);
}
