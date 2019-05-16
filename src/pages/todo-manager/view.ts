import { html } from '../../../node_modules/lit-html/lit-html.js';
import { event } from '../../dab-element.js';

import '../../components/todo-list/index.js';

export default function(this: import('./index').default) {
  return html`
    <todo-list
      .todos=${this.active}
      @add=${event(this.addTodo)}
      @update=${event(this.updateTodo)}
      @archive=${event(this.updateTodo)}
    ></todo-list>

    <todo-list archive
      .todos=${this.archived}
      @add=${event(this.addTodo)}
      @delete=${event(this.deleteTodo)}
    ></todo-list>
  `;
}
