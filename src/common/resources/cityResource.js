/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-24
 */
export default function cityResource($resource) {
    'ngInject';
    // return $resource('/common/data/citys.json');
    return $resource('/citys');
}
