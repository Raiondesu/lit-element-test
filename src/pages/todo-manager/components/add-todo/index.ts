import { property, customElement } from '../../../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../../../dab-element.js';
import view from './view.js';
import styles from './styles.js';

/**
 * Add todos easily
 * @event {Todo} add - event of adding the todo
 */
@customElement('add-todo')
@style(styles)
@render(view)
export default class AddTodo extends DabElement {
  @property({ type: String, attribute: false })
  public text: string = '';

  get disabled() {
    return this.text === '';
  }

  get newTodo(): Todo {
    return {
      done: false,
      text: this.text
    }
  }

  addTodo() {
    if (this.disabled) {
      return;
    }

    this.emit('add', this.newTodo);

    this.text = '';
  }

  setText(e: Event) {
    if (e.target && e.target instanceof HTMLInputElement) {
      this.text = e.target.value;
    }
  }

  onKeyPress(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.addTodo();
    }
  }
}
