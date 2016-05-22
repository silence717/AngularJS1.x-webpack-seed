/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import angular from 'angular';
import AlbumController from './AlbumCtrl';

export default angular
    .module('app.album', [])
    .config(config)
    .controller('AlbumController', AlbumController)
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
    });
}