### TypeScript

Sobre a renderização da tabela:

No `index.htm` logo abaixo do formulário, criar somente uma `div`, pois ela vai receber a renderização do template;

Em NegociacoesView, criar um constructor que vai receber como parâmetro um seletor CSS (id da div criada acima);

Criar um atributo `elemento: HTMLElement;`

Esse `elemento` vai receber no construtor o `querySelector(seletor)`;

Para quê serve o método template? Declarar o template da minha view.

Criar o método `update()` para renderizar esse template em um elemento DOM(`this.elemento.innerHTML = this.template();`) que eu captei através do meu construtor, passando o seletor e pegando com o `querySeletor`.

No Controller vou criar uma properties `negociacoesView` que vai receber o seletor criado no HTML e no constructor eu chamo o método `update()`;

