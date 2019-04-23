var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, element } from '../dab-element.js';
import '../components/todo-list.js';
import todos from '../todos.js';
let TodoManager = class TodoManager extends DabElement {
    constructor() {
        super(...arguments);
        this.todos = todos;
        this.render = () => html `
    <todo-list
      .todos=${this.active}
      @add=${this.addTodo}
      @archive=${this.archiveTodo}
      @delete=${this.archiveTodo}
      @update=${this.updateTodo}
    ></todo-list>

    <todo-list archive
      .todos=${this.archived}
      @add=${this.addTodo}
      @archive=${this.archiveTodo}
      @delete=${this.deleteTodo}
      @update=${this.updateTodo}
    ></todo-list>
  `;
    }
    static get styles() {
        return css `
      :host {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around
      }

      todo-list {
        display: block;
      }
    `;
    }
    updateTodo() {
        this.requestUpdate();
    }
    addTodo(e) {
        const todo = e.detail;
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
    archiveTodo(e) {
        const todo = e.detail;
        this.next(_ => {
            todo.archived = true;
        });
    }
    deleteTodo(e) {
        const todo = e.detail;
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
    element('todo-manager')
], TodoManager);
export { TodoManager };
