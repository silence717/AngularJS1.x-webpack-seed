/**
 * @description [相册入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import './album.css';

import angular from 'angular';
import AlbumController from './AlbumCtrl';
import PhotoController from './photo/PhotoCtrl';
import {AlbumListRouter, AlbumDetailRouter} from './Routers';

export default angular
    .module('app.album', [])
    .config(config)
    .controller('AlbumController', AlbumController)
    .controller('PhotoController', PhotoController)
    .name;


function config($stateProvider) {
    'ngInject';
    $stateProvider.state(AlbumListRouter.state, AlbumListRouter.config);
    $stateProvider.state(AlbumDetailRouter.state, AlbumDetailRouter.config);
}
