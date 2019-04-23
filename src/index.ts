import { html, customElement, property, css } from '../node_modules/lit-element/lit-element.js';
import { DabElement } from './dab-element.js';

import './todo-list.js';

@customElement('todo-manager')
export class TodoManager extends DabElement {
  static get styles() {
    return css`
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

  @property({ type: Object })
  public todos: Todo[] = [
    { done: false, text: 'todo 1' },
    { done: false, text: 'todo 2' },
    { done: true, text: 'todo 3' },
    { done: true, text: 'todo 4' },
  ];

  updateTodo() {
    this.requestUpdate();
  }

  addTodo(e: CustomEvent) {
    const todo: Todo = e.detail;

    this.next(_ => {
      const idx = this.todos.indexOf(todo);

      if (idx >= 0) {
        this.todos[idx] = todo;
      } else {
        this.todos.push(todo)
      }
    });
  }

  archiveTodo(e: CustomEvent) {
    const todo: Todo = e.detail;

    this.next(_ => {
      todo.archived = true;
    });
  }

  deleteTodo(e: CustomEvent) {
    const todo: Todo = e.detail;
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

  render = () => html`
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
