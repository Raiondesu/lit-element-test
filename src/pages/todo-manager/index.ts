import { customElement } from '../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../dab-element.js';
import todos from '../../todos.js';
import view from './view.js';
import css from './styles.js';

@customElement('todo-manager')
@render(view)
@style(css)
export default class TodoManager extends DabElement {
  public todos: Todo[] = todos;

  updateTodo() {
    this.requestUpdate();
  }

  addTodo(todo: Todo) {
    this.next(_ => {
      const idx = this.todos.indexOf(todo);

      if (idx >= 0) {
        this.todos[idx] = todo;
      } else {
        this.todos.push(todo)
      }
    });
  }

  archiveTodo(todo: Todo) {
    this.updateTodo();
    // this.next(_ => {
    //   todo.archived = true;
    // });
  }

  deleteTodo(todo: Todo) {
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
}
