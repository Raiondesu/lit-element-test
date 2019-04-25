import { html } from '../../../node_modules/lit-html/lit-html.js';
import { event } from '../../dab-element.js';
import '../../components/todo-list/index.js';
export default function () {
    return html `
    <todo-list
      .todos=${this.active}
      @add=${event(this.addTodo)}
      @archive=${event(this.archiveTodo)}
      @delete=${event(this.archiveTodo)}
      @update=${event(this.updateTodo)}
    ></todo-list>

    <todo-list archive
      .todos=${this.archived}
      @add=${event(this.addTodo)}
      @archive=${event(this.archiveTodo)}
      @delete=${event(this.deleteTodo)}
      @update=${event(this.updateTodo)}
    ></todo-list>
  `;
}
