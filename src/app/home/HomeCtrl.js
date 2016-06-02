/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-19
 */
export default class HomeController {

    constructor(appInfoResource, $state) {

        let vm = this;
        appInfoResource.success(data => {
            vm.apps = data;
        });

        vm.state = $state;
    }
}