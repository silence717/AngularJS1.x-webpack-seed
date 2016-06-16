/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-19
 */
export default class AlbumController {

    constructor(photoResource) {

        let vm = this;
        vm.photos = photoResource.query();
    }
}
