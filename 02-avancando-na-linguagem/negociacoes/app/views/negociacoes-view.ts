import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
   

    protected template(model: Negociacoes): string {
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

    update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model);
    }
}