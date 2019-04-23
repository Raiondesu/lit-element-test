import { LitElement, Constructor } from '../node_modules/lit-element/lit-element.js';

export class DabElement extends LitElement {
  emit(name: string, detail?: any) {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }

  set(target: any, prop: PropertyKey, value: any) {
    target[prop] = value;
    this.requestUpdate();
  }

  next(cb: Function) {
    cb();

    this.requestUpdate();
  }

  delete(target: any, prop: PropertyKey) {
    delete target[prop];
    this.requestUpdate();
  }
}

export const element = (tagName: string, extendsTag?: string) => {
  const decorator = (classOrDescriptor: Constructor<HTMLElement>) => {
    window.customElements.define(tagName, classOrDescriptor, extendsTag ? { extends: extendsTag } : undefined);
  };

  decorator.extends = <T extends typeof HTMLElement | string = string>(el: T) => (
    typeof el === 'string' ? element(tagName, el) : element(tagName)
  );

  return decorator;
}
