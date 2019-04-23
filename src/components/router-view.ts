import { html } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, element } from '../dab-element.js';

@element('router-view')
export class RouterView extends DabElement {
  render = () => html`<template></template>`;

  createRenderRoot() { return this; }
}
