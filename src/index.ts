// @ts-ignore
import { Router } from 'https://unpkg.com/@vaadin/router';

import './components/app-nav.js';
import './components/router-view.js';
import './pages/home-page.js';
import './pages/todo-manager.js';

const router = new Router(document.querySelector('router-view'));

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

console.log(router);
