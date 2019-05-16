// @ts-ignore
import { Router } from 'https://unpkg.com/@vaadin/router';
import './components/router-view/index.js';

import './components/app-nav/index.js';
import './pages/home-page.js';
import './pages/todo-manager/index.js';
import { customElement, html, css } from '../node_modules/lit-element/lit-element.js';
import { DabElement, style, unshadow } from './dab-element.js';

@customElement('app-root')
@style(css`
  app-root {
      display: flex;
      height: 100vh;
      width: 100%;
    }
`)
@unshadow
class App extends DabElement {
  render = () => html`
    <app-nav></app-nav>
    <router-view></router-view>
  `;

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
}
