"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MensagemView = void 0;
var view_js_1 = require("./view.js");
var MensagemView = /** @class */ (function (_super) {
    __extends(MensagemView, _super);
    function MensagemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MensagemView.prototype.template = function (model) {
        return "<p class=\"alert alert-info\">".concat(model, "</p>");
    };
    return MensagemView;
}(view_js_1.View));
exports.MensagemView = MensagemView;
