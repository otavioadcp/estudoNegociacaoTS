var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Negociacoes = /** @class */ (function () {
    function Negociacoes() {
        this._negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this._negociacoes.push(negociacao);
    };
    Negociacoes.prototype.lista = function () {
        //retorna um novo array com os itens de negociacoes
        //para nao permitir alteracoes nos dados
        return __spreadArrays(this._negociacoes);
    };
    return Negociacoes;
}());
