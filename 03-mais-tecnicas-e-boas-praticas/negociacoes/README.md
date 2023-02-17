### TypeScript


1. Integrando nossa view à página:

No `index.htm` logo abaixo do formulário, criar somente uma `div`, pois ela vai receber a renderização do template;

Em NegociacoesView, criar um constructor que vai receber como parâmetro um seletor CSS (id da div criada acima);

Criar um atributo `elemento: HTMLElement;`

Esse `elemento` vai receber no construtor o `querySelector(seletor)`;

Para quê serve o método template? Declarar o template da minha view.

Criar o método `update()` para renderizar esse template em um elemento DOM(`this.elemento.innerHTML = this.template();`) que eu captei através do meu construtor, passando o seletor e pegando com o `querySeletor`.

No Controller vou criar uma properties `negociacoesView` que vai receber o seletor criado no HTML e no constructor eu chamo o método `update()`;

Resumo:

Utilizando a API do DOM, podemos criar elementos dinamicamente através de `document.createElement` ou: Através da propriedade innerHTML que recebe uma string que é convertida para elementos do DOM.

2. Unindo view e modelo

Agora, a nossa view precisa receber os dados do modelo para a renderização funcionar. Quando eu adicionar uma nova negociação, eu quero que aquela negociação apareça lá na tabela.

#### No Controller,

Vou adicionar no construtor as negociações para renderizar na tabela;
`this.negociacoesView.update(this.negociacoes);`

Por que para cada negociacao , no método adicionar eu chamo o método update;

#### Em NegociaçõesView,

O método update vai receber o model do tipo Negociações como parâmetro;
`update(model: NegociacoesView)`

O método template() também vai receber o parâmetro;

Eu tenho que renderizar, no meu tbody, uma <tr> e uma <td> para cada dado, que são data, quantidade e valor.

#### Dentro da template

Tudo o que está aqui vai ser interpolado com o HTML. “Olha, nessa parte que está aqui, processa um JavaScript para mim”. E o resultado final vai ser “cuspido” dentro desse tbody.

Então, eu pego `model.lista` (Lembra que ele lista para mim todos os elementos) O que eu vou fazer? Como ele é um array, eu posso chamar o método `map()`. E desse método map(), eu vou escrever negociação.

Isso significa que para cada item da minha lista, eu vou fazer um `map`. Por que eu tenho de fazer um map()? O resultado disso, tem que ser um HTML, uma String.

Então, eu tenho que converter esse negociação em uma string para ser inserida nesse `tbody`. Então, cada negociação tem que virar uma <tr> com <td>. Então, esse item vai me retornar outra template string.

Eu vou ter uma <td>, que vai ser a data, uma da quantidade, e uma do valor.

Mas tem um problema. Se eu fizer isso, o retorno vai ser um array. E se eu dou um print nesse array, direto, ele pode colocar uma vírgula que eu nem pedi para colocar.

O que eu vou fazer? Nós sabemos que todo array tem o `join`. Eu vou dizer o seguinte: pega a minha lista, converte cada modelo que é um objeto JavaScript em uma string. Depois que você me retornar esse array onde cada item da lista é um string, junta todo mundo numa única string, grande, e o separador entre eles vai ser o espaço.

3. StrictNullCheck

Diz para o compilador TSC que pare de assumir implicitamente o tipo null para todos os tipos da aplicação. Caso null faça sentido, o desenvolvedor deve deixar isso explícito em seu código. Inclusive o StrictNullChecks obrigará o desenvolvedor a tratar todos os pontos de acesso a valores null em sua aplicação, forçando que o desenvolvedor pondere com cuidado cada cenário. 







