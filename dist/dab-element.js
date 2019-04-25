//@ts-ignore
import 'https://unpkg.com/autobind@1.0.3/autobind.js';
import { LitElement } from '../node_modules/lit-element/lit-element.js';
export class DabElement extends LitElement {
    emit(name, ...details) {
        this.dispatchEvent(new CustomEvent(name, { detail: details }));
    }
    set(target, prop, value) {
        target[prop] = value;
        this.requestUpdate();
    }
    next(cb) {
        cb();
        this.requestUpdate();
    }
    delete(target, prop) {
        delete target[prop];
        this.requestUpdate();
    }
}
export const render = (view) => (target) => {
    target.prototype.render = view;
    return autobind(target);
};
export const style = (style) => (target) => {
    const defineStyle = (getStyle) => Object.defineProperty(target, 'styles', {
        get: getStyle
    });
    if (typeof style === 'function') {
        defineStyle(style);
    }
    else {
        defineStyle(() => style);
    }
    return target;
};
export const event = (handler) => ((e) => Array.isArray(e.detail) ? handler(...e.detail) : handler(e.detail));
