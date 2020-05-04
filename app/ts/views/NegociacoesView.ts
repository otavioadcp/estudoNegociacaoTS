class NegociacoesView {

    private _element: Element;

    constructor(seletor: string){
        this._element = document.querySelector(seletor)
    }

    update(model: Negociacoes): void{
        this._element.innerHTML = this.template(model);
    }


    template(model: Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
            ${model.lista().map(item => {
                return `
                    <tr>
                        <td>${item.data.getDate()}/${item.data.getMonth()+1}/${item.data.getFullYear()}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.volume}</td>
                    </tr>
                `
            }).join('')}
        </tbody>

        <tfoot>
        </tfoot>
    </table>             
        `
    }
}