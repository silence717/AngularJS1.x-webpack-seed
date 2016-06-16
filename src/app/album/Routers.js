/**
 * @description [相册路由管理]
 * @author [silence_yfang@126.com]
 * @date  2016-05-23
 */
import albumListTpl from './index.html';
import albumDetailTpl from './photo/index.html';

export const AlbumListRouter = {
    state: 'album',
    config: {
        url: '/album',
            views: {
            '@': {
                template: albumListTpl,
                controller: 'AlbumController',
                controllerAs: 'vm'
            }
        },
        title: '好玩的相册'
    }
};

export const AlbumDetailRouter = {
    state: 'album.detail',
    config: {
        url: '/:id',
        views: {
            '@': {
                template: albumDetailTpl,
                controller: 'PhotoController',
                controllerAs: 'vm'
            }
        },
        title: '单张照片show'
    }
};
