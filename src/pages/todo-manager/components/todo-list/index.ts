import { property, customElement } from '../../../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../../../dab-element.js';

import view from './view.js';
import css from './styles.js';

/**
 * Lists todos
 * @event add - event of adding the todo
 * @event delete - event of deleting the todo
 * @event update - event of updating the todo
 * @event archive - event of archiving the todo
 */
@customElement('todo-list')
@render(view)
@style(css)
export default class TodoList extends DabElement {
  @property({ type: Array })
  public todos: Todo[] = [];

  @property({ type: Boolean })
  public archive: boolean = false;

  updateTodo = (todo: Todo) => (done: boolean) => {
    this.set(todo, 'done', done);

    this.emit('update', todo);
  }

  addTodo(todo: Todo) {
    this.emit('add', todo);
  }

  archiveTodo(todo: Todo) {
    this.emit('archive', todo);
  }

  deleteTodo(todo: Todo) {
    this.emit('delete', todo);
  }
}
