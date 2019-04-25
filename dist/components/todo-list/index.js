var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, customElement } from '../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../dab-element.js';
import view from './view.js';
import css from './styles.js';
/**
 * Lists todos
 * @event add - event of adding the todo
 * @event delete - event of deleting the todo
 * @event update - event of updating the todo
 * @event archive - event of archiving the todo
 */
let TodoList = class TodoList extends DabElement {
    /**
     * Lists todos
     * @event add - event of adding the todo
     * @event delete - event of deleting the todo
     * @event update - event of updating the todo
     * @event archive - event of archiving the todo
     */
    constructor() {
        super(...arguments);
        this.todos = [];
        this.archive = false;
        this.updateTodo = (todo) => (done) => {
            this.set(todo, 'done', done);
            this.emit('update', todo);
        };
    }
    addTodo(todo) {
        this.emit('add', todo);
    }
    archiveTodo(todo) {
        this.emit('archive', todo);
    }
    deleteTodo(todo) {
        this.emit('delete', todo);
    }
};
__decorate([
    property({ type: Array })
], TodoList.prototype, "todos", void 0);
__decorate([
    property({ type: Boolean })
], TodoList.prototype, "archive", void 0);
TodoList = __decorate([
    customElement('todo-list'),
    render(view),
    style(css)
], TodoList);
export { TodoList };
