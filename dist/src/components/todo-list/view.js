"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {

    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }

    return cooked;

};

Object.defineProperty(exports, "__esModule", { value: true });

var lit_html_js_1 = require("../../../node_modules/lit-html/lit-html.js");

var repeat_js_1 = require("../../../node_modules/lit-html/directives/repeat.js");

var dab_element_js_1 = require("../../dab-element.js");

require("../todo-item/index.js");

require("../add-todo/index.js");

function default_1() {

    var _this = this;

    return lit_html_js_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    <h2>", " todos</h2>\n\n    ", "\n\n    ", "\n  "], ["\n    <h2>", " todos</h2>\n\n    ",

        "\n\n    ",

        "\n  "])), this.archive ? 'Archived' : 'Your', repeat_js_1.repeat(this.todos, function (todo) { return lit_html_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <todo-item ?archived=", "\n        .todo=", "\n        @update=", "\n        @archive=", "\n        @delete=", "\n        @restore=", "\n      ></todo-item>\n    "], ["\n      <todo-item ?archived=", "\n        .todo=", "\n        @update=", "\n        @archive=", "\n        @delete=", "\n        @restore=", "\n      ></todo-item>\n    "])), _this.archive, todo, dab_element_js_1.event(_this.updateTodo(todo)), dab_element_js_1.event(_this.archiveTodo), dab_element_js_1.event(_this.deleteTodo), dab_element_js_1.event(_this.addTodo)); }), this.archive ? lit_html_js_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""]))) : lit_html_js_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <add-todo @add=", "></add-todo>\n    "], ["\n      <add-todo @add=", "></add-todo>\n    "])), dab_element_js_1.event(this.addTodo)));

}

exports.default = default_1;

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":";;;;;;AAAA,0EAAkE;AAClE,iFAA6E;AAC7E,uDAA6C;AAE7C,iCAA+B;AAC/B,gCAA8B;AAE9B;IAAA,iBAkBC;IAjBC,OAAO,kBAAI,0HAAA,YACH,EAAkC,qBAEtC;QAQA,UAEA;QAED,MACF,KAfO,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC,MAAM,EAEtC,kBAAM,CAAC,IAAI,CAAC,KAAK,EAAE,UAAA,IAAI,IAAI,OAAA,kBAAI,+OAAA,+BACR,EAAY,kBACzB,EAAI,oBACF,EAA4B,qBAC3B,EAAuB,oBACxB,EAAsB,qBACrB,EAAmB,6BAEjC,KAPwB,KAAI,CAAC,OAAO,EACzB,IAAI,EACF,sBAAK,CAAC,KAAI,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC,EAC3B,sBAAK,CAAC,KAAI,CAAC,WAAW,CAAC,EACxB,sBAAK,CAAC,KAAI,CAAC,UAAU,CAAC,EACrB,sBAAK,CAAC,KAAI,CAAC,OAAO,CAAC,GANL,CAQ5B,CAAC,EAEA,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,kBAAI,qEAAA,EAAE,KAAC,CAAC,CAAC,kBAAI,kHAAA,yBACX,EAAmB,oBACrC,KADkB,sBAAK,CAAC,IAAI,CAAC,OAAO,CAAC,CACrC,EACD;AACJ,CAAC;AAlBD,4BAkBC"}