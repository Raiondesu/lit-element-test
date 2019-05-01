import { html } from '../../../node_modules/lit-html/lit-html.js';
import { repeat } from '../../../node_modules/lit-html/directives/repeat.js';
import { event } from '../../dab-element.js';
import '../todo-item/index.js';
import '../add-todo/index.js';
export default function () {
    return html `
    <h2>${this.archive ? 'Archived' : 'Your'} todos</h2>

    ${repeat(this.todos, todo => html `
      <todo-item ?archived=${this.archive}
        .todo=${todo}
        @update=${event(this.updateTodo(todo))}
        @archive=${event(this.archiveTodo)}
        @delete=${event(this.deleteTodo)}
        @restore=${event(this.addTodo)}
      ></todo-item>
    `)}

    ${this.archive ? html `` : html `
      <add-todo @add=${event(this.addTodo)}></add-todo>
    `}
  `;
}
