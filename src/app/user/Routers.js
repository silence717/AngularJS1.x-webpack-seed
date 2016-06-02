/**
 * @description [个人中心路由]
 * @author [silence_yfang@126.com]
 * @date  2016-05-24
 */
import indexTpl from './index.html';
import baseInfoTpl from './baseInfo/index.html';
import footPrintTpl from './footprint/index.html';
import thumbListTpl from './footprint/thumbList.html';
import detailListTpl from './footprint/detailList.html';

export const UserRouter = {
    state: 'user',
    config: {
        url: '/user',
        views: {
            '@': {
                template: indexTpl
            }
        },
        title: '个人中心'
    }
};

export const UserBaseInfoRouter = {
    state: 'user.baseInfo',
    config: {
        url: '/baseInfo',
        views: {
            'content@user': {
                template: baseInfoTpl
            }
        }
    }
};
// https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
// viewname@statename
export const UserFootprintRouter = {
    state: 'user.footprint',
    config: {
        url: '/footprint',
        views: {
            'content@user': {
                template: footPrintTpl,
                controller: 'FootprintController',
                controllerAs: 'vm'
            },
            'thumbList@user.footprint': {
                template: thumbListTpl
            },
            'detailList@user.footprint': {
                template: detailListTpl
            }
        },
        title: '我的足迹'
    }
};
