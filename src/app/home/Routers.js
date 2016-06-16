/**
 * @description [首页路由设置]
 * @author [silence_yfang@126.com]
 * @date  2016-05-24
 */
import homeTpl from './index.html';

export const HomeRouter = {
    state: 'home',
    config: {
        url: '/home',
        views: {
            '@': {
                template: homeTpl,
                controller: 'HomeController',
                controllerAs: 'vm'
            }
        },
        title: '好玩的app'
    }
};
