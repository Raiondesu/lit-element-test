import { html, css } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, element } from '../dab-element.js';
import todos from '../todos.js';

import('../components/todo-list.js');

@element('todo-manager')
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

  public todos: Todo[] = todos;

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
