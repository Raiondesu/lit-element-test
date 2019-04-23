import { html, css, property, customElement } from '../node_modules/lit-element/lit-element.js';
import { DabElement } from './dab-element.js';

@customElement('add-todo')
export class AddTodo extends DabElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        margin-top: 1rem;
      }

      :host > input {
        flex-grow: 1;
      }
    `;
  }

  @property({ type: String, attribute: false })
  public text: string = '';

  get disabled() {
    return this.text === '';
  }

  addTodo() {
    if (this.disabled) {
      return;
    }

    this.emit('add', {
      done: false,
      text: this.text
    });

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

  render = () => html`
    <input type=text
      .value=${this.text}
      @input=${this.setText}
      @keypress=${this.onKeyPress}
    />
    <button ?disabled=${this.disabled} @click=${this.addTodo}>Add</button>
  `;
}
