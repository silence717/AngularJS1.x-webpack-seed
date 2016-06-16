/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-23
 */
export default class PhotoController {

    constructor(photoResource, $stateParams) {

        let vm = this;
        vm.detail = photoResource.query();
    }
}
