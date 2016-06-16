/**
 * @author [silence_yfang@126.com]
 * @date  2016-05-24
 */

export function routerConfig($urlRouterProvider) {

    'ngInject';

    // 默认路由设置
    $urlRouterProvider.otherwise('/home');

    // 无视浏览器中 url末尾的"/"
    // 设置时 url, 末尾不要添加 "/"
    $urlRouterProvider.rule(($injector, $location) => {

        const path = $location.path();

        const hashTrailingSlash = path[path.length - 1] === '/';

        if (hashTrailingSlash) {
            return path.slice(0, path.length - 1);
        }
    });
}
