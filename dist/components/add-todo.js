var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, property, customElement } from '../../node_modules/lit-element/lit-element.js';
import { DabElement } from '../dab-element.js';
/**
 * Add todos easily
 * @event {Todo} add - event of adding the todo
 */
let AddTodo = class AddTodo extends DabElement {
    /**
     * Add todos easily
     * @event {Todo} add - event of adding the todo
     */
    constructor() {
        super(...arguments);
        this.text = '';
        this.render = () => html `
    <input type=text
      .value=${this.text}
      @input=${this.setText}
      @keypress=${this.onKeyPress}
    />
    <button ?disabled=${this.disabled} @click=${this.addTodo}>Add</button>
  `;
    }
    static get styles() {
        return css `
      :host {
        display: flex;
        margin-top: 1rem;
      }

      :host > input {
        flex-grow: 1;
      }
    `;
    }
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
    setText(e) {
        if (e.target && e.target instanceof HTMLInputElement) {
            this.text = e.target.value;
        }
    }
    onKeyPress(e) {
        if (e.keyCode === 13) {
            this.addTodo();
        }
    }
};
__decorate([
    property({ type: String, attribute: false })
], AddTodo.prototype, "text", void 0);
AddTodo = __decorate([
    customElement('add-todo')
], AddTodo);
export { AddTodo };
