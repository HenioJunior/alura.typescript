import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel {

    constructor(
        private _data: Date,
        public readonly _quantidade: number,
        public readonly _valor: number){
            super();
        }

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
}