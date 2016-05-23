/**
 * @description [相册入口]
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';
import AlbumController from './AlbumCtrl';
import PhotoController from './photo/PhotoCtrl';

export default angular
    .module('app.album', [])
    .config(config)
    .controller('AlbumController', AlbumController)
    .controller('PhotoController', PhotoController)
    .name;


function config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('album', {
            url: '/album',
            views: {
                '@': {
                    templateUrl: './app/album/index.html',
                    controller: 'AlbumController',
                    controllerAs: 'vm'
                }
            },
            title: '好玩的相册'
        })
        .state('album.detail', {
            url: 'album/:id',
            views: {
                '@': {
                    templateUrl: './app/album/photo/index.html',
                    controller: 'PhotoController',
                    controllerAs: 'vm'
                }
            },
            title: '单张照片show'
        });
}