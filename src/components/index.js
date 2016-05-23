/**
 * @description [组件入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-23
 */
import angular from 'angular';

import appInfo from './appInfo';
import installApp from './installApp';

export default angular
    .module('app.components', [
        appInfo,
        installApp
    ])
    .name;