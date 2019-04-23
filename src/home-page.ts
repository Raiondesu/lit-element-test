import { html, customElement, property, css } from '../node_modules/lit-element/lit-element.js';
import { DabElement } from './dab-element.js';

@customElement('home-page')
export class HomePage extends DabElement {
  render = () => html`
    <h1>Home Page here, buddy</h1>
  `;
}
