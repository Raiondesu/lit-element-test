var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, customElement } from '../../../../../node_modules/lit-element/lit-element.js';
import { DabElement, render, style } from '../../../../dab-element.js';
import view from './view.js';
import styles from './styles.js';
let TodoItem = class TodoItem extends DabElement {
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
    customElement('todo-item'),
    style(styles),
    render(view)
], TodoItem);
export default TodoItem;
