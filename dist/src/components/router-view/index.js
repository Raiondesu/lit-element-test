"use strict";

var __extends = (this && this.__extends) || (function () {

    var extendStatics = function (d, b) {

        extendStatics = Object.setPrototypeOf ||

            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||

            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

        return extendStatics(d, b);

    };

    return function (d, b) {

        extendStatics(d, b);

        function __() { this.constructor = d; }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());

    };

})();

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {

    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }

    return cooked;

};

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

Object.defineProperty(exports, "__esModule", { value: true });

var lit_element_js_1 = require("../../../node_modules/lit-element/lit-element.js");

var dab_element_js_1 = require("../../dab-element.js");

var RouterView = /** @class */ (function (_super) {

    __extends(RouterView, _super);

    function RouterView() {

        return _super !== null && _super.apply(this, arguments) || this;

    }

    RouterView = __decorate([

        lit_element_js_1.customElement('router-view'),

        dab_element_js_1.render(function () { return lit_element_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<template></template>"], ["<template></template>"]))); }),

        dab_element_js_1.unshadow

    ], RouterView);

    return RouterView;

}(dab_element_js_1.DabElement));

exports.RouterView = RouterView;

var templateObject_1;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,mFAAuF;AACvF,uDAAoE;AAKpE;IAAgC,8BAAU;IAA1C;;IAA4C,CAAC;IAAhC,UAAU;QAHtB,8BAAa,CAAC,aAAa,CAAC;QAC5B,uBAAM,CAAC,cAAM,OAAA,qBAAI,0FAAA,uBAAuB,MAA3B,CAA2B,CAAC;QACzC,yBAAQ;OACI,UAAU,CAAsB;IAAD,iBAAC;CAAA,AAA7C,CAAgC,2BAAU,GAAG;AAAhC,gCAAU"}