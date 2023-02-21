import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao> {

    constructor(
        private _data: Date,
        public readonly _quantidade: number,
        public readonly _valor: number){}

    public static criaDeHTML(dataString: string, quantidadeString: string, valorString: string) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }

    get data():Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this._valor * this._quantidade;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this._quantidade},
            Valor: ${this._valor}
        `
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() 
            && this.data.getMonth() === negociacao.data.getMonth() 
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}