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

Object.defineProperty(exports, "__esModule", { value: true });

//@ts-ignore

require("../node_modules/autobind/autobind.js");

var lit_element_js_1 = require("../node_modules/lit-element/lit-element.js");

var DabElement = /** @class */ (function (_super) {

    __extends(DabElement, _super);

    function DabElement() {

        return _super !== null && _super.apply(this, arguments) || this;

    }

    DabElement.prototype.emit = function (name) {

        var details = [];

        for (var _i = 1; _i < arguments.length; _i++) {

            details[_i - 1] = arguments[_i];

        }

        this.dispatchEvent(new CustomEvent(name, { detail: details }));

    };

    DabElement.prototype.set = function (target, prop, value) {

        target[prop] = value;

        this.requestUpdate();

    };

    DabElement.prototype.next = function (cb) {

        cb();

        this.requestUpdate();

    };

    DabElement.prototype.delete = function (target, prop) {

        delete target[prop];

        this.requestUpdate();

    };

    return DabElement;

}(lit_element_js_1.LitElement));

exports.DabElement = DabElement;

exports.unshadow = function (target) {

    target.prototype.createRenderRoot = function () { return this; };

};

exports.render = function (view) { return function (target) {

    target.prototype.render = view;

    return autobind(target);

}; };

exports.style = function (style) { return function (target) {

    var defineStaticStyle = function (getStyle) { return Object.defineProperty(target, 'styles', {

        get: getStyle

    }); };

    var defineInstanceStyle = function (getStyle) {

        console.log('style', target.prototype.render);

        var renderPlain = target.prototype.render;

        target.prototype.render = function render() {

            var css = getStyle().cssText;

            return lit_element_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <style>\n          ", "\n        </style>\n        ", "\n      "], ["\n        <style>\n          ", "\n        </style>\n        ", "\n      "])), css, renderPlain.apply(this));

        };

    };

    var isShadow = String(target.prototype.createRenderRoot) !== String(function () { return this; });

    var styleFunction = typeof style === 'function' ? style : function () { return style; };

    if (isShadow) {

        defineStaticStyle(styleFunction);

    }

    else {

        defineInstanceStyle(styleFunction);

    }

    return target;

}; };

exports.event = function (handler) { return (function (e) { return Array.isArray(e.detail) ? handler.apply(void 0, e.detail) : handler(e.detail); }); };

window.render = exports.render;

window.style = exports.style;

window.e = exports.event;

var templateObject_1;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":"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"}