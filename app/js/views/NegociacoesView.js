var NegociacoesView = /** @class */ (function () {
    function NegociacoesView(seletor) {
        this._element = document.querySelector(seletor);
    }
    NegociacoesView.prototype.update = function (model) {
        this._element.innerHTML = this.template(model);
    };
    NegociacoesView.prototype.template = function (model) {
        return "\n        <table class=\"table table-hover table-bordered\">\n        <thead>\n            <tr>\n                <th>DATA</th>\n                <th>QUANTIDADE</th>\n                <th>VALOR</th>\n                <th>VOLUME</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            " + model.lista().map(function (item) {
            return "\n                    <tr>\n                        <td>" + item.data.getDate() + "/" + (item.data.getMonth() + 1) + "/" + item.data.getFullYear() + "</td>\n                        <td>" + item.quantidade + "</td>\n                        <td>" + item.valor + "</td>\n                        <td>" + item.volume + "</td>\n                    </tr>\n                ";
        }).join('') + "\n        </tbody>\n\n        <tfoot>\n        </tfoot>\n    </table>             \n        ";
    };
    return NegociacoesView;
}());
