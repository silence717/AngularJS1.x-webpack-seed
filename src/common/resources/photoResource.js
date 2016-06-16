/**
 * @description [请求照片数据]
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */

export default function photoResource($resource) {
    'ngInject';
    return $resource('/photos');
}