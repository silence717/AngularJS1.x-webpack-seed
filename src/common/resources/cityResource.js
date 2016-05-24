/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-24
 */
export default function cityResource($http) {
    'ngInject';
    return $http.get('/common/data/citys.json')
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
}
