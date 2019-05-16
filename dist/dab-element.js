//@ts-ignore
import 'https://unpkg.com/autobind@1.0.3/autobind.js';
import { LitElement, html } from '../node_modules/lit-element/lit-element.js';
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
export const unshadow = target => {
    target.prototype.createRenderRoot = function () { return this; };
};
export const render = (view) => (target) => {
    target.prototype.render = view;
    return autobind(target);
};
export const style = (style) => (target) => {
    const defineStaticStyle = (getStyle) => Object.defineProperty(target, 'styles', {
        get: getStyle
    });
    const defineInstanceStyle = (getStyle) => {
        console.log('style', target.prototype.render);
        const renderPlain = target.prototype.render;
        target.prototype.render = function render() {
            const css = getStyle().cssText;
            return html `
        <style>
          ${css}
        </style>
        ${renderPlain.apply(this)}
      `;
        };
    };
    console.log(String(target.prototype.createRenderRoot), String(function () { return this; }));
    console.log(String(target.prototype.createRenderRoot) !== String(function () { return this; }));
    const isShadow = String(target.prototype.createRenderRoot) !== String(function () { return this; });
    const styleFunction = typeof style === 'function' ? style : () => style;
    if (isShadow) {
        defineStaticStyle(styleFunction);
    }
    else {
        defineInstanceStyle(styleFunction);
    }
    return target;
};
export const event = (handler) => ((e) => Array.isArray(e.detail) ? handler(...e.detail) : handler(e.detail));
window.render = render;
window.style = style;
window.e = event;
