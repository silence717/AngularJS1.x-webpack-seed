/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-23
 */

import angular from 'angular';
import installAppDirective from './installAppDirective';

export default angular
    .module('app.installApp', [])
    .directive('installApp', installAppDirective)
    .name;