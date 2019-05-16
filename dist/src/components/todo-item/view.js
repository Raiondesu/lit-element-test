"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {

    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }

    return cooked;

};

Object.defineProperty(exports, "__esModule", { value: true });

var lit_html_js_1 = require("../../../node_modules/lit-html/lit-html.js");

function default_1() {

    return lit_html_js_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    <label class=\"todo\">\n      <input type=\"checkbox\"\n        ?disabled=", "\n        ?checked=", "\n        @change=", "\n      />\n      ", "\n    </label>\n\n    <div class=\"actions\">\n      ", "\n    </div>\n  "], ["\n    <label class=\"todo\">\n      <input type=\"checkbox\"\n        ?disabled=", "\n        ?checked=", "\n        @change=", "\n      />\n      ",

        "\n    </label>\n\n    <div class=\"actions\">\n      ",

        "\n    </div>\n  "])), this.archived, this.todo.done, this.updateDone, this.todo.done ? lit_html_js_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <del class=\"text\">", "</del>\n      "], ["\n        <del class=\"text\">", "</del>\n      "])), this.todo.text) : lit_html_js_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <span class=\"text\">", "</span>\n      "], ["\n        <span class=\"text\">", "</span>\n      "])), this.todo.text), this.archived ? lit_html_js_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        <button @click=", ">+</button>\n        <button @click=", ">DELETE</button>\n      "], ["\n        <button @click=", ">+</button>\n        <button @click=", ">DELETE</button>\n      "])), this.restoreTodo, this.deleteTodo) : lit_html_js_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        <button @click=", ">\n          X\n        </button>\n      "], ["\n        <button @click=", ">\n          X\n        </button>\n      "])), this.archiveTodo));

}

exports.default = default_1;

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.ts"],"names":[],"mappings":";;;;;;AAAA,0EAAkE;AAElE;IACE,OAAO,kBAAI,qSAAA,kFAGO,EAAa,qBACd,EAAc,oBACf,EAAe,oBAEzB;QAID,uDAIC;QAOD,kBAEJ,KArBiB,IAAI,CAAC,QAAQ,EACd,IAAI,CAAC,IAAI,CAAC,IAAI,EACf,IAAI,CAAC,UAAU,EAEzB,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,kBAAI,qHAAA,gCACD,EAAc,gBACnC,KADqB,IAAI,CAAC,IAAI,CAAC,IAAI,EAClC,CAAC,CAAC,kBAAI,uHAAA,iCACe,EAAc,iBACpC,KADsB,IAAI,CAAC,IAAI,CAAC,IAAI,CACpC,EAIC,IAAI,CAAC,QAAQ,CAAC,CAAC,CAAC,kBAAI,kKAAA,2BACH,EAAgB,sCAChB,EAAe,0BACjC,KAFkB,IAAI,CAAC,WAAW,EAChB,IAAI,CAAC,UAAU,EAChC,CAAC,CAAC,kBAAI,2IAAA,2BACW,EAAgB,2CAGlC,KAHkB,IAAI,CAAC,WAAW,CAGlC,EAEH;AACJ,CAAC;AA1BD,4BA0BC"}