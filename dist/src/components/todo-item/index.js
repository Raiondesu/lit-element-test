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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

var lit_element_js_1 = require("../../../node_modules/lit-element/lit-element.js");

var dab_element_js_1 = require("../../dab-element.js");

var view_js_1 = __importDefault(require("./view.js"));

var styles_js_1 = __importDefault(require("./styles.js"));

var TodoItem = /** @class */ (function (_super) {

    __extends(TodoItem, _super);

    function TodoItem() {

        return _super !== null && _super.apply(this, arguments) || this;

    }

    TodoItem.prototype.updateDone = function (e) {

        var _this = this;

        this.next(function () {

            if (e.target && e.target instanceof HTMLInputElement) {

                _this.emit('update', e.target.checked);

            }

            else {

                _this.emit('update', !_this.todo.done);

            }

        });

    };

    TodoItem.prototype.restoreTodo = function () {

        this.todo.archived = false;

        this.emit('restore', this.todo);

    };

    TodoItem.prototype.archiveTodo = function () {

        this.todo.archived = true;

        this.emit('archive', this.todo);

    };

    TodoItem.prototype.deleteTodo = function () {

        this.emit('delete', this.todo);

    };

    __decorate([

        lit_element_js_1.property({ type: Object })

    ], TodoItem.prototype, "todo", void 0);

    __decorate([

        lit_element_js_1.property({ type: Boolean })

    ], TodoItem.prototype, "archived", void 0);

    TodoItem = __decorate([

        lit_element_js_1.customElement('todo-item'),

        dab_element_js_1.style(styles_js_1.default),

        dab_element_js_1.render(view_js_1.default)

    ], TodoItem);

    return TodoItem;

}(dab_element_js_1.DabElement));

exports.default = TodoItem;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAAA,mFAA2F;AAC3F,uDAAiE;AACjE,sDAA6B;AAC7B,0DAAiC;AAKjC;IAAsC,4BAAU;IAAhD;;IA8BA,CAAC;IAvBC,6BAAU,GAAV,UAAW,CAAQ;QAAnB,iBAQC;QAPC,IAAI,CAAC,IAAI,CAAC;YACR,IAAI,CAAC,CAAC,MAAM,IAAI,CAAC,CAAC,MAAM,YAAY,gBAAgB,EAAE;gBACpD,KAAI,CAAC,IAAI,CAAC,QAAQ,EAAE,CAAC,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC;aACvC;iBAAM;gBACL,KAAI,CAAC,IAAI,CAAC,QAAQ,EAAE,CAAC,KAAI,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;aACtC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IAED,8BAAW,GAAX;QACE,IAAI,CAAC,IAAI,CAAC,QAAQ,GAAG,KAAK,CAAC;QAC3B,IAAI,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,IAAI,CAAC,CAAC;IAClC,CAAC;IAED,8BAAW,GAAX;QACE,IAAI,CAAC,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC;QAC1B,IAAI,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,IAAI,CAAC,CAAC;IAClC,CAAC;IAED,6BAAU,GAAV;QACE,IAAI,CAAC,IAAI,CAAC,QAAQ,EAAE,IAAI,CAAC,IAAI,CAAC,CAAC;IACjC,CAAC;IA3BD;QADC,yBAAQ,CAAC,EAAE,IAAI,EAAE,MAAM,EAAE,CAAC;0CACR;IAGnB;QADC,yBAAQ,CAAC,EAAE,IAAI,EAAE,OAAO,EAAE,CAAC;8CACF;IALP,QAAQ;QAH5B,8BAAa,CAAC,WAAW,CAAC;QAC1B,sBAAK,CAAC,mBAAM,CAAC;QACb,uBAAM,CAAC,iBAAI,CAAC;OACQ,QAAQ,CA8B5B;IAAD,eAAC;CAAA,AA9BD,CAAsC,2BAAU,GA8B/C;kBA9BoB,QAAQ"}