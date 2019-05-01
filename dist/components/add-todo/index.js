var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, customElement } from '../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../dab-element.js';
import view from './view.js';
import styles from './styles.js';
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
    }
    get disabled() {
        return this.text === '';
    }
    get newTodo() {
        return {
            done: false,
            text: this.text
        };
    }
    addTodo() {
        if (this.disabled) {
            return;
        }
        this.emit('add', this.newTodo);
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
    customElement('add-todo'),
    render(view),
    style(styles)
], AddTodo);
export default AddTodo;
