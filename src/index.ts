// @ts-ignore
import { Router } from 'https://unpkg.com/@vaadin/router';

import './home-page.js';
import './todo-manager.js';

const router = new Router(document.getElementById('outlet'));

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
