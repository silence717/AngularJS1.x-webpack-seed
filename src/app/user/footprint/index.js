/**
 * @description [我的足迹入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';
import FootprintController from './FootprintCtrl';

export default angular
    .module('app.user.footprint', [])
    .controller('FootprintController', FootprintController)
    .name;
