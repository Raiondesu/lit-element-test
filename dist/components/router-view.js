var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement } from '../../node_modules/lit-element/lit-element.js';
import { DabElement, unshadow, render } from '../dab-element.js';
let RouterView = class RouterView extends DabElement {
};
RouterView = __decorate([
    customElement('router-view'),
    render(() => html `<template></template>`),
    unshadow
], RouterView);
export { RouterView };
