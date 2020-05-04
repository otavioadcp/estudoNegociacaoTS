class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao)
    }

    lista(){
        //retorna um novo array com os itens de negociacoes
        //para nao permitir alteracoes nos dados
        return [...this._negociacoes]
    }
}