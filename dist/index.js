var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @ts-ignore
import { Router } from 'https://unpkg.com/@vaadin/router';
import './components/router-view/index.js';
import './components/app-nav/index.js';
import './pages/home-page.js';
import './pages/todo-manager/index.js';
import { customElement, html, css } from '../node_modules/lit-element/lit-element.js';
import { DabElement, style, unshadow } from './dab-element.js';
let App = class App extends DabElement {
    constructor() {
        super(...arguments);
        this.render = () => html `
    <app-nav></app-nav>
    <router-view></router-view>
  `;
    }
    firstUpdated() {
        const router = new Router(this.querySelector('router-view'));
        router.setRoutes([
            {
                path: '/',
                component: 'home-page'
            },
            {
                path: '/todo',
                component: 'todo-manager'
            }
        ]);
    }
};
App = __decorate([
    customElement('app-root'),
    style(css `
  app-root {
      display: flex;
      height: 100vh;
      width: 100%;
    }
`),
    unshadow
], App);
