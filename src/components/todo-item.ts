import { html, css, property } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, element } from '../dab-element.js';

@element('todo-item')
export class TodoItem extends DabElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: flex;
      }

      :host([archived]) {
        color: grey;
      }

      :host .actions {
        align-self: flex-end;
      }

      :host .todo {
        flex-grow: 1;
      }

      :host .text {
        user-select: none;
      }
    `;
  }

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

  actions = () => html`
    <div class="actions">
      ${this.archived ? html`
        <button @click=${this.restoreTodo}>+</button>
        <button @click=${this.deleteTodo}>DELETE</button>
      ` : html`
        <button @click=${this.archiveTodo}>
          X
          ${/* this.todo.archived !== undefined ? '(was archived previously)' :  */''}
        </button>
      `}
    </div>
  `;


  render = () => html`
    <label class="todo">
      <input type="checkbox"
        ?disabled=${this.archived}
        ?checked=${this.todo.done}
        @change=${this.updateDone}
      />
      ${this.todo.done ? html`
        <del class="text">${this.todo.text}</del>
      ` : html`
        <span class="text">${this.todo.text}</span>
      `}
    </label>

    ${this.actions()}
  `;
}
