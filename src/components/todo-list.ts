import { html, css, property } from '../../node_modules/lit-element/lit-element.js';
import { repeat } from '../../node_modules/lit-html/directives/repeat.js';
import { DabElement, element } from '../dab-element.js';

import './add-todo.js';
import './todo-item.js';

@element('todo-list')
export class TodoList extends DabElement {
  static get styles() {
    return css`
      :host {
        width: 300px;
      }

      :host > h2 {
        margin: initial auto;
        text-align: center;
      }
    `;
  }

  @property({ type: Array })
  public todos: Todo[] = [];

  @property({ type: Boolean })
  public archive: boolean = false;

  updateTodo = (todo: Todo) => (e: CustomEvent) => {
    const done: boolean = e.detail;

    this.set(todo, 'done', done);

    this.emit('update', todo);
  }

  addTodo(e: CustomEvent) {
    this.emit('add', e.detail);
  }

  archiveTodo(e: CustomEvent) {
    this.emit('archive', e.detail);
  }

  deleteTodo(e: CustomEvent) {
    this.emit('delete', e.detail);
  }

  actions = () => this.archive ? html`` : html`
    <add-todo @add=${this.addTodo}></add-todo>
  `;

  get listTitle() {
    return html`<h2>${this.archive ? 'Archived' : 'Your'} todos</h2>`;
  }

  render = () => html`
    ${this.listTitle}

    ${repeat(this.todos, todo => html`
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
