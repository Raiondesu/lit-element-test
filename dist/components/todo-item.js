var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, property } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, element } from '../dab-element.js';
let TodoItem = class TodoItem extends DabElement {
    constructor() {
        super(...arguments);
        this.actions = () => html `
    <div class="actions">
      ${this.archived ? html `
        <button @click=${this.restoreTodo}>+</button>
        <button @click=${this.deleteTodo}>DELETE</button>
      ` : html `
        <button @click=${this.archiveTodo}>
          X
          ${ /* this.todo.archived !== undefined ? '(was archived previously)' :  */''}
        </button>
      `}
    </div>
  `;
        this.render = () => html `
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

    ${this.actions()}
  `;
    }
    static get styles() {
        return css `
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
    updateDone(e) {
        this.next(() => {
            if (e.target && e.target instanceof HTMLInputElement) {
                this.emit('update', e.target.checked);
            }
            else {
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
};
__decorate([
    property({ type: Object })
], TodoItem.prototype, "todo", void 0);
__decorate([
    property({ type: Boolean })
], TodoItem.prototype, "archived", void 0);
TodoItem = __decorate([
    element('todo-item')
], TodoItem);
export { TodoItem };
