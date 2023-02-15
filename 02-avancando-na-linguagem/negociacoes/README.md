### TypeScript

Initial Setup
mkdir typescript-starter
cd typescript-starter

Setup Node.js package.json
npm init -y

Add TypeScript as a dev dependency

npm install typescript --save-dev



###

No projeto ja tem o `lite-server` instalado
    Na pasta `dist` rodar `npm run server`

O atributo `type="module"` indica para o navegador que o arquivo a carregado deve ser tratado com um módulo e não um script.

ex: [<script type="module" src="js/app.js"></script>]

Configuração do compilador

executar o comando `tsc --init` na raiz do projeto para a criação do arquivo `tsconfig.json`

A propriedade `target` indica para o compilator tsc (TypeScript Compiler) para qual versão do Javascript o código escrito em TypeScript deve ser compilado. Isso significa que o resultado final será arquivos Javascript sem qualquer referência para a sintaxe do Typescript.

```json
{
    "compilerOptions": {
        "outDir": "dist/js",
        "target": "ES6",
        "noEmitOnError": true,
        "noImplicitAny": true
    },
    "include": ["app/**/*"]
}
```

Adicionar no `package.json` novo script
```json
  "scripts": {
    "...",
    "start": "concurrently \"npm run watch\" \"npm run server\"",
    "compile": "tsc",
    "watch": "tsc -w"
  },
```

executar: `npm run start`



Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, ao menos que o desenvolvedor decida exportar uma ou mais funcionalidades.

ex:
```javascript
export class Negociacao {
    #data;
    #quantidade;
    #valor;
    ...
```

Criação da NegociacaoController;
Criação das variáveis(inputData, ...)
Criação do constructor que vai receber os elementos do HTML;
  ```javascript
    this.inputData = document.querySelector('#data');
  ```
Criação do método adiciona() que vai receber neste momento um console.log() das variáveis;

Em app, eu instancio o `controller` e crio uma const `form` que receberá os dados do formulário no HTML;

Criação de um evento do tipo `submit` para o `form` e para cada evento eu chamo o método `adiciona()`;

Dentro do addEventListener(), não esquecer do método preventDefault();

#### Tipagem

As variáveis que vem do DOM são do tipo HTMLInputElement, mas o dados chegam em string;
Sobre o `Date()`:
A string passada pelo construtor deve ter o ano, mês e dia separados por vírgula.
Para isso é necessário criar uma expressão regular, para trocar os '-' pela ',' e usar o método `replace(exp, ',')`
Para os números fazer o `parseInt()` e `parseFloat()`;


