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

/**

 * Add todos easily

 * @event {Todo} add - event of adding the todo

 *

 * @example

 *

 * import { customElement, html } from 'lit-element';

 *

 * @customElement('todo-page')

 * export default class MyTodoPage {

 *    render() {

 *      return html`

 *        <add-todo></add-todo>

 *      `

 *    }

 * }

 */

var AddTodo = /** @class */ (function (_super) {

    __extends(AddTodo, _super);

    function AddTodo() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.text = '';

        return _this;

    }

    Object.defineProperty(AddTodo.prototype, "disabled", {

        get: function () {

            return this.text === '';

        },

        enumerable: true,

        configurable: true

    });

    Object.defineProperty(AddTodo.prototype, "newTodo", {

        get: function () {

            return {

                done: false,

                text: this.text

            };

        },

        enumerable: true,

        configurable: true

    });

    AddTodo.prototype.addTodo = function () {

        if (this.disabled) {

            return;

        }

        this.emit('add', this.newTodo);

        this.text = '';

    };

    AddTodo.prototype.setText = function (e) {

        if (e.target && e.target instanceof HTMLInputElement) {

            this.text = e.target.value;

        }

    };

    AddTodo.prototype.onKeyPress = function (e) {

        if (e.keyCode === 13) {

            this.addTodo();

        }

    };

    __decorate([

        lit_element_js_1.property({ type: String, attribute: false })

    ], AddTodo.prototype, "text", void 0);

    AddTodo = __decorate([

        lit_element_js_1.customElement('add-todo'),

        dab_element_js_1.style(styles_js_1.default),

        dab_element_js_1.render(view_js_1.default)

    ], AddTodo);

    return AddTodo;

}(dab_element_js_1.DabElement));

exports.default = AddTodo;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAAA,mFAA2F;AAC3F,uDAAiE;AACjE,sDAA6B;AAC7B,0DAAiC;AAEjC;;;;;;;;;;;;;;;;GAgBG;AAIH;IAAqC,2BAAU;IAH/C;QAAA,qEAuCC;QAlCQ,UAAI,GAAW,EAAE,CAAC;;IAkC3B,CAAC;IAhCC,sBAAI,6BAAQ;aAAZ;YACE,OAAO,IAAI,CAAC,IAAI,KAAK,EAAE,CAAC;QAC1B,CAAC;;;OAAA;IAED,sBAAI,4BAAO;aAAX;YACE,OAAO;gBACL,IAAI,EAAE,KAAK;gBACX,IAAI,EAAE,IAAI,CAAC,IAAI;aAChB,CAAA;QACH,CAAC;;;OAAA;IAED,yBAAO,GAAP;QACE,IAAI,IAAI,CAAC,QAAQ,EAAE;YACjB,OAAO;SACR;QAED,IAAI,CAAC,IAAI,CAAC,KAAK,EAAE,IAAI,CAAC,OAAO,CAAC,CAAC;QAE/B,IAAI,CAAC,IAAI,GAAG,EAAE,CAAC;IACjB,CAAC;IAED,yBAAO,GAAP,UAAQ,CAAQ;QACd,IAAI,CAAC,CAAC,MAAM,IAAI,CAAC,CAAC,MAAM,YAAY,gBAAgB,EAAE;YACpD,IAAI,CAAC,IAAI,GAAG,CAAC,CAAC,MAAM,CAAC,KAAK,CAAC;SAC5B;IACH,CAAC;IAED,4BAAU,GAAV,UAAW,CAAgB;QACzB,IAAI,CAAC,CAAC,OAAO,KAAK,EAAE,EAAE;YACpB,IAAI,CAAC,OAAO,EAAE,CAAC;SAChB;IACH,CAAC;IAjCD;QADC,yBAAQ,CAAC,EAAE,IAAI,EAAE,MAAM,EAAE,SAAS,EAAE,KAAK,EAAE,CAAC;yCACpB;IAFN,OAAO;QAH3B,8BAAa,CAAC,UAAU,CAAC;QACzB,sBAAK,CAAC,mBAAM,CAAC;QACb,uBAAM,CAAC,iBAAI,CAAC;OACQ,OAAO,CAoC3B;IAAD,cAAC;CAAA,AApCD,CAAqC,2BAAU,GAoC9C;kBApCoB,OAAO"}