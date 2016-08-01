/**
 * @file virtual-dom/Element
 * @author leon<ludafa@outlook.com>
 */

const RESERVED_PROPS = {
    key: true,
    ref: true
};

/**
 * virtual-dom/Element
 *
 * An element describing a component is also an element,
 * just like an element describing the DOM node.
 * They can be nested and mixed with each other.
 *
 * @class
 */
function Element(type: any, props: any) {

    const element = {};

    element.type = type;
    element.props = props;

    return element;

}

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 生成一个 Element
 *
 * @param {Function} type     类型
 * @param {*}        config    属性
 * @param {...*}     children 子元素
 * @return {Element}
 */
function createElement(type: any, config: any, ...children: any) {

    const props = {};

    // 过滤保留属性
    for (let propName in config) {
        if (
            hasOwnProperty.call(config, propName)
            && RESERVED_PROPS.hasOwnProperty(propName)
        ) {

            let value = config[propName];

            if (
                value === undefined
                && typeof type === 'function'
                && type.defaultProps
            ) {
                value = type.defaultProps[propName];
            }

            props[propName] = value;
        }
    }

    return Element(
        type,
        {...props, children}
    );

}


/**
 * 复制元素
 *
 * @param  {Element} element   被复制的元素
 * @param  {*}       overrides 属性：这些属性会覆盖 element 的属性
 * @return {Element}
 */
function cloneElement(element: Element, overrides: any) {

    const {
        type,
        props
    } = element;

    return new Element(type, Object.assign({}, props, overrides));
}

export {
    createElement,
    cloneElement
};
