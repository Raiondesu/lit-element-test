import { html, customElement } from '../../node_modules/lit-element/lit-element.js';
import { DabElement } from '../dab-element.js';

@customElement('app-nav')
export class AppNav extends DabElement {
  render = () => html`
    <a href="/">Home</a>
    <a href="/todo">TODOs</a>
  `;
}
