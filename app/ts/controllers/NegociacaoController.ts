class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');

    constructor(){

        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
        this._negociacoesView.update(this._negociacoes)
        /* 
        ou com casting implicito:

        this._inputData = <HTMLInputElement>document.querySelector('#data')
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')
        this._inputValor = <HTMLInputElement>document.querySelector('#valor')
        
        */


    }

    adiciona(event: Event){
        event.preventDefault();

        const negociacao = new Negociacao(

            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes)


    }

   
}