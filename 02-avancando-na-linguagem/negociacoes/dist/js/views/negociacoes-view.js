import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>            
                </tr>
            </thead>
            <tbody>
            ${model.lista().map(negociacao => {
            return `
                <tr>
                <td>${new Intl.DateTimeFormat('pt-BR').format(negociacao.data)}</td>
                <td>${negociacao._quantidade}</td>
                <td>${negociacao._valor}</td>
                </tr>
                `;
        }).join(' ')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
