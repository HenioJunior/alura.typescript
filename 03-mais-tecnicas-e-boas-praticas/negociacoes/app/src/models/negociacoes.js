"use strict";
exports.__esModule = true;
exports.Negociacoes = void 0;
var Negociacoes = /** @class */ (function () {
    function Negociacoes() {
        this.negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this.negociacoes.push(negociacao);
    };
    Negociacoes.prototype.lista = function () {
        return this.negociacoes;
    };
    return Negociacoes;
}());
exports.Negociacoes = Negociacoes;
