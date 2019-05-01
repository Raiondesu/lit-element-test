import { html } from '../../../../../node_modules/lit-html/lit-html.js';

export default function(this: import('./index').default) {
  return html`
    <input type=text
      .value=${this.text}
      @input=${this.setText}
      @keypress=${this.onKeyPress}
    />
    <button ?disabled=${this.disabled} @click=${this.addTodo}>Add</button>
  `;
}
