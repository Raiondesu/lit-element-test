var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, property } from '../../node_modules/lit-element/lit-element.js';
import { repeat } from '../../node_modules/lit-html/directives/repeat.js';
import { DabElement, element } from '../dab-element.js';
import('./add-todo.js');
import('./todo-item.js');
let TodoList = class TodoList extends DabElement {
    constructor() {
        super(...arguments);
        this.todos = [];
        this.archive = false;
        this.updateTodo = (todo) => (e) => {
            const done = e.detail;
            this.set(todo, 'done', done);
            this.emit('update', todo);
        };
        this.actions = () => this.archive ? html `` : html `
    <add-todo @add=${this.addTodo}></add-todo>
  `;
        this.render = () => html `
    ${this.listTitle}

    ${repeat(this.todos, todo => html `
      <todo-item ?archived=${this.archive}
        .todo=${todo}
        @update=${this.updateTodo(todo)}
        @archive=${this.archiveTodo}
        @delete=${this.deleteTodo}
        @restore=${this.addTodo}
      ></todo-item>
    `)}

    ${this.actions()}
  `;
    }
    static get styles() {
        return css `
      :host {
        width: 300px;
      }

      :host > h2 {
        margin: initial auto;
        text-align: center;
      }
    `;
    }
    addTodo(e) {
        this.emit('add', e.detail);
    }
    archiveTodo(e) {
        this.emit('archive', e.detail);
    }
    deleteTodo(e) {
        this.emit('delete', e.detail);
    }
    get listTitle() {
        return html `<h2>${this.archive ? 'Archived' : 'Your'} todos</h2>`;
    }
};
__decorate([
    property({ type: Array })
], TodoList.prototype, "todos", void 0);
__decorate([
    property({ type: Boolean })
], TodoList.prototype, "archive", void 0);
TodoList = __decorate([
    element('todo-list')
], TodoList);
