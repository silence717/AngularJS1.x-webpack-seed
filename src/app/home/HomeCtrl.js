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

    goUserCenter() {
        // this.state.go('user.baseInfo');
        this.state.go('album.detail', {id: 1});
    }
    getConfig() {
        let config = this.state.get('user');
        console.log(config);
        console.log('************');
        console.log(this.state.href('album.detail', {id: 0}));
        console.log(this.state.includes('album'));
        console.log(this.state.is('home'));
    }
}