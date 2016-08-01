/**
 * @file virtual-dom
 * @author leon<ludafa@outlook.com>
 */

/* @flow */

import Component from './Component.js';

import {createElement, cloneElement} from './Element.js';

Component.createElement = createElement;
Component.cloneElement = cloneElement;

export default Component;

export {
    createElement,
    cloneElement
};
