import { html } from '../../../../../node_modules/lit-html/lit-html.js';
export default function () {
    return html `
    <label class="todo">
      <input type="checkbox"
        ?disabled=${this.archived}
        ?checked=${this.todo.done}
        @change=${this.updateDone}
      />
      ${this.todo.done ? html `
        <del class="text">${this.todo.text}</del>
      ` : html `
        <span class="text">${this.todo.text}</span>
      `}
    </label>

    <div class="actions">
      ${this.archived ? html `
        <button @click=${this.restoreTodo}>+</button>
        <button @click=${this.deleteTodo}>DELETE</button>
      ` : html `
        <button @click=${this.archiveTodo}>
          X
        </button>
      `}
    </div>
  `;
}
