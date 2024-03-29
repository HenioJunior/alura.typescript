
import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
   
    @escapar()
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
                <td>${this.formatarData(negociacao.data)}</td>
                <td>${negociacao._quantidade}</td>
                <td>${negociacao._valor}</td>
                </tr>
                `;
            }).join(' ')}
            </tbody>
        </table>
        `;
    }

    private formatarData(data: Date): string {
        //return new Intl.DateTimeFormat('pt-BR').format(data)
        return new Intl.DateTimeFormat().format(data)
    }
}