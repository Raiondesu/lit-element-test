import { html, customElement } from '../../../node_modules/lit-element/lit-element.js';
import { DabElement, unshadow, render } from '../../dab-element.js';

@customElement('router-view')
@render(() => html`<template></template>`)
@unshadow
export class RouterView extends DabElement {}
