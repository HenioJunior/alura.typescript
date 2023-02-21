import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export default class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;

    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;

    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();

    private negociacoesView = new NegociacoesView('#negociacoesView');

    private mensagemView = new MensagemView('#mensagemView');

    private negociacoesService = new NegociacoesService

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    //@inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDeHTML(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('As negociações só podem ser realizadas em dias úteis.')
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    }

    public importaDados(): void {
        this.negociacoesService.obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao)
                }
                this.negociacoesView.update(this.negociacoes);
            })
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}