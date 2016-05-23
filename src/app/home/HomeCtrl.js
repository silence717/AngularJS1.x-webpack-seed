/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-19
 */

export default class HomeController {

    constructor(appInfoResource) {

        let vm = this;

        appInfoResource.success(data => {
            vm.apps = data;
        });
    }
}