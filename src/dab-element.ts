import { LitElement } from '../node_modules/lit-element/lit-element.js';

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
