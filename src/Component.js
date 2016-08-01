/**
 * @file virtual-dom/Component
 * @description All the custom Element should extends this class
 * @author leon<ludafa@outlook.com>
 */

export default class Component {

    props: any;

    /**
     * 构造函数
     *
     * @public
     */
    constructor(props: ?any) {
        this.props = props;
    }

    /**
     * 设定属性
     *
     * @public
     * @param {*}        partialState 部分属性
     * @param {Function} callback     回调函数：当状态更新完成后回调此函数
     */
    setState(partialState: any, callback: ?any) {


    }

    /**
     * 强制刷新
     *
     * @public
     * @param  {Function} callback 回调函数：当强制新完成后回调此函数
     */
    forceUpdate(callback: ?any) {

    }

}
