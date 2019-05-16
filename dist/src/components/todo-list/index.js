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

 * Lists todos

 * @event add - event of adding the todo

 * @event delete - event of deleting the todo

 * @event update - event of updating the todo

 * @event archive - event of archiving the todo

 */

var TodoList = /** @class */ (function (_super) {

    __extends(TodoList, _super);

    function TodoList() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.todos = [];

        _this.archive = false;

        _this.updateTodo = function (todo) { return function (done) {

            _this.set(todo, 'done', done);

            _this.emit('update', todo);

        }; };

        return _this;

    }

    TodoList.prototype.addTodo = function (todo) {

        this.emit('add', todo);

    };

    TodoList.prototype.archiveTodo = function (todo) {

        this.emit('archive', todo);

    };

    TodoList.prototype.deleteTodo = function (todo) {

        this.emit('delete', todo);

    };

    __decorate([

        lit_element_js_1.property({ type: Array })

    ], TodoList.prototype, "todos", void 0);

    __decorate([

        lit_element_js_1.property({ type: Boolean })

    ], TodoList.prototype, "archive", void 0);

    TodoList = __decorate([

        lit_element_js_1.customElement('todo-list'),

        dab_element_js_1.style(styles_js_1.default),

        dab_element_js_1.render(view_js_1.default)

    ], TodoList);

    return TodoList;

}(dab_element_js_1.DabElement));

exports.default = TodoList;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAAA,mFAA2F;AAC3F,uDAAiE;AAEjE,sDAA6B;AAC7B,0DAA8B;AAE9B;;;;;;GAMG;AAIH;IAAsC,4BAAU;IAHhD;QAAA,qEA2BC;QAtBQ,WAAK,GAAW,EAAE,CAAC;QAGnB,aAAO,GAAY,KAAK,CAAC;QAEhC,gBAAU,GAAG,UAAC,IAAU,IAAK,OAAA,UAAC,IAAa;YACzC,KAAI,CAAC,GAAG,CAAC,IAAI,EAAE,MAAM,EAAE,IAAI,CAAC,CAAC;YAE7B,KAAI,CAAC,IAAI,CAAC,QAAQ,EAAE,IAAI,CAAC,CAAC;QAC5B,CAAC,EAJ4B,CAI5B,CAAA;;IAaH,CAAC;IAXC,0BAAO,GAAP,UAAQ,IAAU;QAChB,IAAI,CAAC,IAAI,CAAC,KAAK,EAAE,IAAI,CAAC,CAAC;IACzB,CAAC;IAED,8BAAW,GAAX,UAAY,IAAU;QACpB,IAAI,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;IAC7B,CAAC;IAED,6BAAU,GAAV,UAAW,IAAU;QACnB,IAAI,CAAC,IAAI,CAAC,QAAQ,EAAE,IAAI,CAAC,CAAC;IAC5B,CAAC;IArBD;QADC,yBAAQ,CAAC,EAAE,IAAI,EAAE,KAAK,EAAE,CAAC;2CACA;IAG1B;QADC,yBAAQ,CAAC,EAAE,IAAI,EAAE,OAAO,EAAE,CAAC;6CACI;IALb,QAAQ;QAH5B,8BAAa,CAAC,WAAW,CAAC;QAC1B,sBAAK,CAAC,mBAAG,CAAC;QACV,uBAAM,CAAC,iBAAI,CAAC;OACQ,QAAQ,CAwB5B;IAAD,eAAC;CAAA,AAxBD,CAAsC,2BAAU,GAwB/C;kBAxBoB,QAAQ"}