/**
 * @description [resource入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import appInfoResource from './appInfoResource';
import photoResource from './photoResource';

export default angular
    .module('app.resources', [])
    .factory('photoResource', photoResource)
    .factory('appInfoResource', appInfoResource)
    .name;
