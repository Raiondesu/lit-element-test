import { LitElement } from '../node_modules/lit-element/lit-element.js';
export class DabElement extends LitElement {
    emit(name, detail) {
        this.dispatchEvent(new CustomEvent(name, { detail }));
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
export const element = (tagName, extendsTag) => {
    const decorator = (classOrDescriptor) => {
        window.customElements.define(tagName, classOrDescriptor, extendsTag ? { extends: extendsTag } : undefined);
    };
    decorator.extends = (el) => (typeof el === 'string' ? element(tagName, el) : element(tagName));
    return decorator;
};
