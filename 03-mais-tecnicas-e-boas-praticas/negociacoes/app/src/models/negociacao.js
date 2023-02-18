"use strict";
exports.__esModule = true;
exports.Negociacao = void 0;
var Negociacao = /** @class */ (function () {
    function Negociacao(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    Object.defineProperty(Negociacao.prototype, "data", {
        get: function () {
            var data = new Date(this._data.getTime());
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this._valor * this._quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Negociacao.criaDeHTML = function (dataString, quantidadeString, valorString) {
        var exp = /-/g;
        var data = new Date(dataString.replace(exp, ','));
        var quantidade = parseInt(quantidadeString);
        var valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    };
    return Negociacao;
}());
exports.Negociacao = Negociacao;
