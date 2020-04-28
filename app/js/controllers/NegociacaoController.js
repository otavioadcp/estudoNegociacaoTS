var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        /*
        ou com casting implicito:

        this._inputData = <HTMLInputElement>document.querySelector('#data')
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')
        this._inputValor = <HTMLInputElement>document.querySelector('#valor')
        
        */
    }
    NegociacaoController.prototype.adiciona = function (event) {
        event.preventDefault();
        var negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
    };
    return NegociacaoController;
}());
