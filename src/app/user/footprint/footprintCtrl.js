/**
 * @description [我的足迹controller]
 * @author [silence_yfang@126.com]
 * @date  2016-05-19
 */
export default class FootprintController {

    constructor(cityResource) {
        let vm = this;

        vm.citys = cityResource.query();

        vm.isShowThumb = true;
        vm.isShowDetail = false;
    }
    // 切换为缩略图展示
    // showThumbListClick() {
    //     this.isShowThumb = true;
    //     this.isShowDetail = false;
    // }
    // // 切换为详细列表
    // showDetailListClick() {
    //     this.isShowThumb = false;
    //     this.isShowDetail = true;
    // }
}
