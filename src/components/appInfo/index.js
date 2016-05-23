/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-23
 */

import angular from 'angular';
import appInfoDirective from './appInfoDirective';

export default angular
    .module('app.appInfo', [])
    .directive('appInfo', appInfoDirective)
    .name;

