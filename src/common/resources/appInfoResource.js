/**
 * @description [几款运动app]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */

export default function appInfoResource($resource) {
    'ngInject';
    // return $resource('/common/data/appInfo.json');
    return $resource('/apps');
}