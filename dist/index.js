// @ts-ignore
import { Router } from 'https://unpkg.com/@vaadin/router';
import './components/router-view.js';
import './components/app-nav.js';
import './pages/home-page.js';
import './pages/todo-manager/index.js';
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
