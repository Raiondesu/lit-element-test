import { html } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, element } from '../dab-element.js';

@element('app-nav')
export class AppNav extends DabElement {
  render = () => html`
    <a href="/">Home</a>
    <a href="/todo">TODOs</a>
  `;
}
