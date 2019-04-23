import { html } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, element } from '../dab-element.js';

@element('home-page')
export class HomePage extends DabElement {
  render = () => html`
    <h1>Home Page here, buddy</h1>
  `;
}
