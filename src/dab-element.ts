//@ts-ignore
import 'https://unpkg.com/autobind@1.0.3/autobind.js';
declare function autobind<T>(target: T): T;

import { LitElement, TemplateResult, CSSResult, html } from '../node_modules/lit-element/lit-element.js';


export class DabElement extends LitElement {
  emit(name: string, ...details: any) {
    this.dispatchEvent(new CustomEvent(name, { detail: details }));
  }

  set(target: any, prop: PropertyKey, value: any) {
    target[prop] = value;
    this.requestUpdate();
  }

  next(cb: (_?: never) => void) {
    cb();

    this.requestUpdate();
  }

  delete(target: any, prop: PropertyKey) {
    delete target[prop];
    this.requestUpdate();
  }
}

export const unshadow = target => {
  target.prototype.createRenderRoot = function () { return this; };
};

export const render = (view: () => TemplateResult) => (target) => {
  target.prototype.render = view;

  return autobind(target);
}

export const style = (style: CSSResult | (() => CSSResult)) => (target) => {


  const defineStaticStyle = (getStyle: () => CSSResult) => Object.defineProperty(target, 'styles', {
    get: getStyle
  });

  const defineInstanceStyle = (getStyle: () => CSSResult) => {
    console.log('style', target.prototype.render);
    const renderPlain = target.prototype.render;

    target.prototype.render = function render() {
      const css = getStyle().cssText;

      return html`
        <style>
          ${css}
        </style>
        ${renderPlain.apply(this)}
      `;
    }
  }
  const isShadow = String(target.prototype.createRenderRoot) !== String(function (this: any) { return this; });

  const styleFunction = typeof style === 'function' ? style : () => style;

  if (isShadow) {
    defineStaticStyle(styleFunction);
  } else {
    defineInstanceStyle(styleFunction);
  }

  return target;
}

export const event = <
  T extends (...args: any[]) => any,
  D = T extends (...args: infer U) => any ? U : any
>(handler: T) => (
  (e: CustomEvent<D>): ReturnType<T> => Array.isArray(e.detail) ? handler(...e.detail) : handler(e.detail)
);

window.render = render;
window.style = style;
window.e = event;
