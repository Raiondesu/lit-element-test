import { html, customElement } from '../../node_modules/lit-element/lit-element.js';
import { DabElement } from '../dab-element.js';

@customElement('router-view')
export class RouterView extends DabElement {
  render = () => html`<template></template>`;

  createRenderRoot() { return this; }
}
