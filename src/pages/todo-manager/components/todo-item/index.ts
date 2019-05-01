import { property, customElement } from '../../../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../../../dab-element.js';
import view from './view.js';
import styles from './styles.js';

@customElement('todo-item')
@render(view)
@style(styles)
export default class TodoItem extends DabElement {
  @property({ type: Object })
  public todo!: Todo;

  @property({ type: Boolean })
  public archived!: boolean;

  updateDone(e: Event) {
    this.next(() => {
      if (e.target && e.target instanceof HTMLInputElement) {
        this.emit('update', e.target.checked);
      } else {
        this.emit('update', !this.todo.done);
      }
    });
  }

  restoreTodo() {
    this.todo.archived = false;
    this.emit('restore', this.todo);
  }

  archiveTodo() {
    this.todo.archived = true;
    this.emit('archive', this.todo);
  }

  deleteTodo() {
    this.emit('delete', this.todo);
  }
}
