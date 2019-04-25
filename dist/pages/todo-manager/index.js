var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../dab-element.js';
import todos from '../../todos.js';
import view from './view.js';
import css from './styles.js';
let TodoManager = class TodoManager extends DabElement {
    constructor() {
        super(...arguments);
        this.todos = todos;
    }
    updateTodo() {
        this.requestUpdate();
    }
    addTodo(todo) {
        this.next(_ => {
            const idx = this.todos.indexOf(todo);
            if (idx >= 0) {
                this.todos[idx] = todo;
            }
            else {
                this.todos.push(todo);
            }
        });
    }
    archiveTodo(todo) {
        this.next(_ => {
            todo.archived = true;
        });
    }
    deleteTodo(todo) {
        const idx = this.todos.indexOf(todo);
        if (idx > -1) {
            this.next(_ => {
                this.todos.splice(idx, 1);
            });
        }
    }
    get archived() {
        return this.todos.filter(t => t.archived);
    }
    get active() {
        return this.todos.filter(t => !t.archived);
    }
};
TodoManager = __decorate([
    customElement('todo-manager'),
    render(view),
    style(css)
], TodoManager);
export { TodoManager };
