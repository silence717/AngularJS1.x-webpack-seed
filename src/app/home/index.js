/**
 * @description [home入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */

import angular from 'angular';
import HomeController from './HomeCtrl';
import {HomeRouter} from './Routers';

export default angular
    .module('app.home', [])
    .config(config)
    .controller('HomeController', HomeController)
    .name;

function config($stateProvider) {
    'ngInject';
    $stateProvider.state(HomeRouter.state, HomeRouter.config);
}
