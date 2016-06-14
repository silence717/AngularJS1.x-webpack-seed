/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-19
 */
export default class AlbumController {

    constructor(photoResource) {

        let vm = this;

        // photoResource.success(data => {
        //     vm.photos = data;
        // })
        vm.photos = photoResource.query();
    }
}