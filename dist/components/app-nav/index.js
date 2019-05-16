var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, css } from '../../../node_modules/lit-element/lit-element.js';
import { DabElement, style } from '../../dab-element.js';
let AppNav = class AppNav extends DabElement {
    constructor() {
        super(...arguments);
        this.render = () => html `
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/todo">TODOs</a>
      </li>
    </ul>
  `;
    }
};
AppNav = __decorate([
    customElement('app-nav'),
    style(css `
  :host {
    height: 100%;
    background: #32363B;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0 1rem;
  }

  a[href] {
    color: white;
    text-decoration: none;
  }
`)
], AppNav);
export { AppNav };
