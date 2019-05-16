import { html, customElement, css } from '../../../node_modules/lit-element/lit-element.js';
import { DabElement, style } from '../../dab-element.js';

@customElement('app-nav')
@style(css`
  :host {
    height: 100%;
    background: #32363B;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0 1rem;
  }

  a[href] {
    color: white;
    text-decoration: none;
  }
`)
export class AppNav extends DabElement {
  render = () => html`
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/todo">TODOs</a>
      </li>
    </ul>
  `;
}
