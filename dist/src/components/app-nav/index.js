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

var AppNav = /** @class */ (function (_super) {

    __extends(AppNav, _super);

    function AppNav() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.render = function () { return lit_element_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <ul>\n      <li>\n        <a href=\"/\">Home</a>\n      </li>\n      <li>\n        <a href=\"/todo\">TODOs</a>\n      </li>\n    </ul>\n  "], ["\n    <ul>\n      <li>\n        <a href=\"/\">Home</a>\n      </li>\n      <li>\n        <a href=\"/todo\">TODOs</a>\n      </li>\n    </ul>\n  "]))); };

        return _this;

    }

    AppNav = __decorate([

        lit_element_js_1.customElement('app-nav'),

        dab_element_js_1.style(lit_element_js_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  :host {\n    height: 100%;\n    background: #32363B;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n    margin: 0;\n    padding: 0 1rem;\n  }\n"], ["\n  :host {\n    height: 100%;\n    background: #32363B;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n    margin: 0;\n    padding: 0 1rem;\n  }\n"]))))

    ], AppNav);

    return AppNav;

}(dab_element_js_1.DabElement));

exports.AppNav = AppNav;

var templateObject_1, templateObject_2;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,mFAA4F;AAC5F,uDAAyD;AAoBzD;IAA4B,0BAAU;IAlBtC;QAAA,qEA6BC;QAVC,YAAM,GAAG,cAAM,OAAA,qBAAI,qNAAA,kJASlB,MATc,CASd,CAAC;;IACJ,CAAC;IAXY,MAAM;QAlBlB,8BAAa,CAAC,SAAS,CAAC;QACxB,sBAAK,CAAC,oBAAG,gQAAA,6LAgBT,KAAC;OACW,MAAM,CAWlB;IAAD,aAAC;CAAA,AAXD,CAA4B,2BAAU,GAWrC;AAXY,wBAAM"}