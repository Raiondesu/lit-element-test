var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement } from '../../node_modules/lit-element/lit-element.js';
import { DabElement } from '../dab-element.js';
let HomePage = class HomePage extends DabElement {
    constructor() {
        super(...arguments);
        this.render = () => html `
    <h1>Home Page here, buddy</h1>
  `;
    }
};
HomePage = __decorate([
    customElement('home-page')
], HomePage);
export { HomePage };
