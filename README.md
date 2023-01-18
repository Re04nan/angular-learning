![](https://img.shields.io/badge/Status-Page%20in%20construction-orange)

<div align="center">

# ![](https://angular.io/assets/images/logos/angular/logo-nav@2x.png)

</div>

## ⚙ Requisitos

  [Node.js](https://nodejs.org/en/)

### 1 - Instalando o Angular CLI e criando primeiro projeto
```ts
npm install -g @angular/cli
// verificando a versão do angular cli
ng version

// criando projeto
ng new <nome da aplicacao>

// build do projeto path -> http://localhost:4200/
ng serve

// alterar porta padrão 4200 no build do projeto
ng serve --port <número> 
```
### 2 - Criando novos componentes
```ts
// criando um componente atráves do terminal
ng g c <nome-do-component>| ng generate component <nome-do-component>

// decorators (anotações) @Component do @angular/core será utilizado para configurações
@Component({
  selector: '<nome-do-seletor>',
  templateUrl: '<caminho-do-template>', // template: `<tags-html>Limitado a 3 linhas no max (boas práticas), caso contrário trabalhar com arquivo próprio html</tags-html>`
  styleUrls: ['<caminho-do-estilo>s']
})
```
### 3 - Módulos no Angular
```ts
// Criando um módulo atráves do terminal
ng g m <nome-do-module>| ng generate module <nome-do-module>

// decorators (anotações) @NgModule do @angular/core
@NgModule({
	declarations: [
	// Listamos todos os componentes, diretivas e pipes.
	],
	imports: [
	// Outros módulos ou pertecentes ao módulo utilizado.
	],
	providers: [
	// Serviços disponíveis a todos os componentes declarados.
	],
	bootstrap: [
	// Componente raíz que é instânciado quando inicia a aplicação.
	],
	exports: [
	// O que vamos expor para outros módulos
	],
})
```
### 4 - Diretivas
```ts
*ngFor// repetição
*ngIf // condicional
[ngClass] // Classes com condicional
[ngStyle] // adiciona um estilo embutido a uma tag específica
...
```
### 5 - Criando um Serviço
```ts
// criando um serviço atráves do terminal
ng g s <nome-do-servico>| ng generate service <nome-do-servico>

decorators (anotações) @Injectable do @angular/core // No Angular a DI (Injeção de Dependência) ocorre atráves do construtor.

//modelo de responsabilidade
componente -> serviço -> backend (java, c#, php, etc...)
```
### 6 - Property Binding
```ts
//Data Binding
<template> <- {component}
	   <- {{valor}} // Interpolation (Interpolação)
	   <- [propriedade]="valor" // Attribute binding ou bind-propriedade="valor"
	   -> (evento)="handler"// Event binding
	   <-> [(ngModel)]="propriedade" // Two way binding

//Quando não existe uma propriedade no elemento, usa-se [attr.colspan]
```
### 7 - Class e Style Binding
```ts
//Instalação do ng2-bootstrap(opcional)
npm i ng2-bootstrap bootstrap --save

//angular.json
"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css"]

//mudança
#classe (change)="0"

// Property Binding Class
[class.alert-success]="classe.value == 'alert-success'"

// Interpolação
class="alert {{ classe.value }}"

//Style Binding
[style.display]="classe.value == 'alert-danger' ? 'block' : 'none'"
```
### 8 - Event Binding
```ts
(evento)="<função-disparada>" ou on-evento="<função-disparada>"

// params
(evento)="<função-disparada($event)>" // $event pega os valores da tag

// disparando evento com uso de variável #
#<nome-var> // declarando a variável
(evento)="função(<nome-var>.value)"
//Sem a variável
(evento)="função($event.target.value)" 

//Aplicando estilo com Attribute binding
[class.propriedade]="valor"
```
### 9 - Two-way data binding
```ts
// binding de propriedade e evento
[<propriedade>]="<valor>"
(input)="<valor> = $event.target.value"
ou
[ngModel]="<valor>"
(ngModelChange)="<valor> = $event"

// two-way data binding 
[(ngModel)]="<objeto.atributo|valor>" ou bindon-ngModel="<objeto.atributo|valor>" 
// ngModel é uma diretiva que pertence a FormsModule do @angular/forms
```
### 10 - Input Properties
```ts
// Attribute binding
[<nome-propriedade>]="<valor>"

//Decorator @Input do @angular/core expõem propriedades para onde é chamado, tendo como opcional o parâmetro para passar o nome da propriedade caso seja diferente do nome da variável.
@Input('<nome-propriedade>') <nome-variável>: tipo = <valor>;

ou 

// também podemos expor a propriedade por meio do @Component metadados
@Component({
  inputs: ['<nome-variável>:<nome-propriedade-se-diferente-da-variável>']
})
```
### 11 - Output Properties
```ts
// EventEmitter e @Output do @angular/core para passar eventos
@Output('<nome-propriedade>') <nome-variável> = new EventEmitter();

// Emitindo o valor
this.<nome-variável>.emit({<nome-variável-ouvinte>: this.<nome-variável-emissora>});

// podemos expor a propriedade por meio do @Component metadados sem utilizar o decorater @Output
@Component({
  outputs: ['<nome-variável>']
})
```
### 12 - Ciclo de vida (life-cycle) do Componente
```ts
Eventos(Hooks) do @angular/core
ngOnChanges // antes do ngOnInit e quando valor property-binding é atualizado
ngOnInit // quando o Component é inicializado
ngDoCheck // a cada ciclo de verificação de mudanças
ngAfterContentInit // depois de inserir conteúdo externo na view
ngAfterContentChecked // a cada verificação de conteúdo inserido
ngAfterViewChecked // a cada verificação de conteúdo / conteúdo filho
ngOnDestroy // antes da diretiva / component ser destruído
```
### 13 - Acesso ao DOM e ao Template com ViewChild
```ts
// Decorater @ViewChild do @angular/core 
@ViewChild('<nome-variável-input>') <nome-variável-recebe-input>: HTMLElement // HTMLElement para descobrir o elemento html atráves de um console.log(this.<nome-variável-recebe-input>)
```
### 14 - Style Guide (Guia de estilo) seguindo as boas práticas 
```ts
<nome-projeto>.<tipo-arquivo>.<extensão>

//Tipos de arquivos - opcional passar o path de onde o projeto é gerado.
component ▶ ng g c <nome-component>
service ▶ ng g s <nome-service>
directive ▶ ng g d <nome-directive>
pipe ▶  ng g p <nome-pipe>
class ▶ ng g class <nome-class>
interface ▶ ng g i <nome-interface>
enum ▶ ng g e <nome-enum>
module ▶ ng g m <nome-module>
guard ▶ ng g g <nome-guard>

//Algumas extensões
.css|.scss|.sass|.less ▶ arquivos de estilos
.html ▶ arquivo html
.spec.ts ▶ arquivos de testes com typescript
.ts ▶ arquivos typescript
```
### 15 - Boas práticas do Angular com Style Guide
```ts
// https://angular.io/guide/styleguide#angular-coding-style-guide
```
### 16 - Testes Unitários com ESLint e Jasmine
```ts
ng add @angular-eslint/schematics
ng lint // Escaneia o código, verificar boas práticas do style guide, pequenos erros como ponto e vírgula, entre outros.
// Jasmine é uma biblioteca de testes BDD - Testes Orientado a Comportamento - https://jasmine.github.io/
ng test // executar os testes Jasmine

// Karma é uma ferramenta de testes que permite executar cada linha de código do teste em diferentes browser. Permitindo emular e verificar a compatibilidade cross-browser da aplicação. - https://github.com/karma-runner/karma/

ng e2e // executar os testes end-two-end(e2e) - Testes de Integração
```
### 17 - Angular CLI
 - Cria toda a estrutura do projeto.
 - Gera página HTML inicial, arquivos Typescript iniciais, arquivos CSS e arquivos de testes unitários.
 - Cria arquivo package.json com todas as dependências do Angular.
 - Instala todas as dependências do node (npm install).
 - Configura o Karma para executar os testes unitários com Jasmine.
 - Configura Protractor para executar os testes end-to-end (E2E).
 - Inicializa um repositório git no projeto e faz o commit inicial.
 - Cria todos os arquivos necessários para fazer o build da aplicação para produção.

### 18 - Estrutura diretórios do projeto
📁 config ➡ diretório que contém configuração para deploy/build e teste.

📁 dist ➡ diretório onde é gerado o build da aplicação. Ignorado pelo git.

📁 e2e ➡ diretório que contém os scripts para testes end-to-end.

📁 node_modules ➡ diretório que contém os pacotes npm da app (package.json). Também ignorado pelo git.

📁 public ➡ diretório genérico que contém um arquivo .npmignore.

📁 src ➡ diretório do código fonte da aplicação. Contém código typescript/javascript, CSS, imagens e templates HTML.

📁 angular-cli.json ➡ arquivo que contém informações sobre o projeto e build de produção, como nome do projeto, config de onde encontrar os arquivos fontes da app, config de testes, etc.

📁 tslint.json ➡ arquivo que contém configurações para fazer lint da app.

### 19 - Estrutura código fonte (SRC)
```ts
index.html ➡ // página HTML principal da aplicação, que faz o startup.
main.ts ➡ //  é o código que carrega a aplicação. Somente deve ser editado caso seja necessário adicionar mais módulos na app (que não dê pra fazer via angular-cli.json).
polyfills.ts ➡ // contém os imports de libs para compatibilidade com ES6 (biblioteca de suporte).
tsconfig.json ➡ // contém as configurações do compilador do typescript.
typings.d.ts ➡ // é usado para declarações de tipos que a app usa + módulo.
index.ts ➡ // contém o export de todos os arquivos do módulo.
```
### 20 - Estrutura package.json: Dependencies
```ts
@angular/core ➡ // pacote principal do framework Angular. Contém decorators e metadados, Component, Directive, injeção de dependência e os hooks de clico de vida do Component.
@angular/common ➡ // Serviços, pipes e diretivas comuns fornecidas pelo time de dev do Angular.
@angular/compiler ➡ // Template de compilação do angular. Entende o código dos templates e converte em código que faz a app ser executada e renderizada. Desenvolvedores não interagem com esse pacote diretamente (apenas usamos seu código).
@angular/forms ➡ // Contém todo o código para construção de formulários no angular.
@angular/platform-browser ➡ // Contém todo o código relacionado ao DOM e ao browser, especialmente as parte que ajudam a renderizar o DOM. Esse pacote também contém o método para fazer o bootstrap da aplicação para builds de produção que pré-compila os templates.
@angular/platform-browser-dynamic ➡ // Contém os Providers e o método para iniciar as aplicações que compilam templates no lado cliente. Não usa compilação offline. Usada para fazer bootstrap durante desenvolvimento e exemplos plunker.
@angular/http ➡ //  Fornece o cliente HTTP.
@angular/router ➡ // Classes de roteamento.
```
### 21 - Estrutura package.json: Dependecies: Polyfills
```ts
core-js ➡ // biblioteca que permite compatibilidade de engines JS antigas com a especificação do ES 2015, ou seja, emula as funcionalidade do ES 2015 (ES6) e ES7 em browsers que suportam somente ES5.
reflect-metadata ➡ // dependência compartilhada entre o Angular e o compilador TypeScript. Permite o uso de decorators no código(annotations). Isso permite ao desenvolvedores fazer upgrade no TypeScript sem precisar de fazer upgrade no Angular. Esse é o motivo desta ser uma dependência da aplicação e não do angular.
rxjs ➡ //  extensão para especificação dos Observables(programação assíncrona). Reactive extensions for JavaScript.
ts-helpers ➡ //  biblioteca auxiliar que permite otimização de código typescript quando o mesmo é compilado para ES5.
zone.js ➡ //  extensão (plugins) útil para tarefas assíncronas (chamadas de Zones).
```
### 22 - Gerando o build de desenvolvimento
```ts
ng build 
ng build --dev  
ng build --dev --e=dev 
ng build --target=development --environment=dev

// Os seguintes arquivos serão gerados
📁dist > 📁index.html // Código base do HTML root
        📁main.bundle.js // Contém todo código do projeto + CSS + HTML (legível).
        📁polyfills.bundle.js // configurações do projeto
```
- Útil para integrar o código do Angular com o projeto de backend (PHP, Java, .NET, Python, Ruby etc.)
- Código que dá pra debugar
### 23 - Gerando o build de produção
```ts
ng build --prod
ng build --prod --env=prod
ng build --target=production --environment=prod

// Os mesmos arquivos de build dev são gerados de forma minificada.
```
- Obfusca e minifica o código JS da aplicação
- CSS e templates HTML já minificados e incluídos em main.bundle.js
```ts
 http-server para testes que envolve servidor

 //Instalação via npm
 //https://www.npmjs.com/package/http-server
 npm install http-server

<diretório> http-server | dist http-server // o código é servido no browser sem precisar configurar um servidor. 
```
### 24 - Bibliotecas externas (bootstrap, jquery, materialize, lodash, etc.)
```ts
// Bootstrap

npm install --save bootstrap@next // @next para pegar versão 4 mais recente do bootstrap e --save para salvar a dependência direto no package.json

// Pacotes que virão junto
jquery
tether // tem como função fazer o intermédio do bootstrap com jquery
bootstrap 

// Configurações
📁angular-cli.json
"styles":[
"styles.css",
"../node_modules/bootstrap/dist/css/bootstrap.css"
],
"scripts":[
"../node_modules/jquery/dist/jquery.js",
"../node_modules/theter/dist/tether.js",
"../node_modules/bootstrap/dist/bootstrap.js"
],

// Materialize - //https://www.npmjs.com/package/angular2-materialize

npm install materialize-css --save
npm install angular2-materialize --save

npm install jquery@^2.2.4 --save

"styles":[
"../node_modules/materialize-css/dist/css/materialize.css" //opcional, pode optar por utilizar o import direto no Component.
],
"scripts":[
  "../node_modules/jquery/dist/jquery.js",
 "../node_modules/materialize-css/dist/js/materialize.js"
]

📁header>index.html
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 

// Lodash - https://lodash.com/ - Possui funções utilitárias JS

npm install --save lodash

📁Component.ts
import * as _ from 'lodash';

npm install --save @types/lodash // para fazer a ponte entre o lodash e o typescript
```
### 25 - Tipos de Diretivas
```ts
// Diretivas Estruturais

// Interagem com a view e modificam a estrutura do DOM e/ou código HTML.

*ngFor
*ngIf
...

// Diretivas de Atributos

// Interagem com o elemento em que foram aplicadas.

ng-class
ng-style
...
```
### 26 -  Deretiva *ngIf
```ts
// Tem a mesma função da condicional IF

⚠️ Cuidado com a performance no código ao utilizar o *ngIf.

// *ngIf x hidden (css)

[hidden] - recomendado para árvore de elementos pequenas. ➡️ E também é menos custoso usar hidden caso o custo de criar a árvore de elementos seja grande.

⚠️ Cuidado com a segurança, se envolver condição de "visibilidade", já que é possível ver o hidden pelo console.

*ngIf - recomendado para árvore de elementos grandes.

ngSwitch, ngSwitchCase e ngSwitchDefault

⚠️  Quando cria um componente via Angular CLI já importa no módulo automaticamente e o declara, caso faça manualmente, precisa lembrar de colocar. 

Aplicando ngSwitch em barra de navegação:

No componente, criar qual aba(opção) está selecionada pelo usuário:

aba: string = 'home';

No HTML:

//propt binding
[class.active] ="aba == 'home'"
[class.active] ="aba == 'map'"
[class.active] ="aba == 'aboult'"

//evento de click
(click)="aba = 'home'"
(click)="aba = 'map'"
(click)="aba = 'aboult'"
 
[ngSwitch]="aba" // conditionExpression 
*ngSwitchCase="'map'"
*ngSwitchCase="'aboult'"
*ngSwitchDefault // não precisa de valor
```
### 27 -  Deretiva *ngFor
```ts
Loop For

*ngFor

//No componente:

cursos: string[] = [...]

ngOnInit(){
	for (let i=0; i<this.cursos.length; i++){
		let curso = this.cursos[i];
	}
}

//HTML:

<li *ngFor="let curso of cursos, let i = index">
	{{i + 1}} - {{curso}}
</li>
```
### 28 - Diretivas: porquê usar * e tag template
```ts
*ngIf

<div *ngIf="mostrarCursos">
//	Lista de cursos
</div>

//Por "trás dos panos" o Angular faz:

//Removendo o * e usando template

<ng-template [ngIf]="mostrarCursos">
  <div>Lista de cursos</div>
</ng-template>

//Outras formas:

<div ng-template="ngIf mostrarCursos">
//	Lista de cursos
</div>

*ngFor

//Removendo o * e usando template

<ul>
  <ng-template ngFor [ngForOf]="cursos" let-curso let-i="index">
    <li>
      {{ i + 1 }} - {{ curso }}
    </li>
  </ng-template>
</ul>

ngSwitch

//Removendo o * e usando template

<div class="container" [ngSwitch]="aba"  >
  <ng-template [ngSwitchCase]="'mapa'">
    <p>Modo Mapa ativado</p>
  </ng-template>
  <ng-template [ngSwitchCase]="'lista'">
    <p>Modo Lista ativado</p>
  </ng-template>
  <ng-template [ngSwitchCase]="'home'" ngSwitchDefault>
    <p>Home</p>
  </ng-template>
</div>
```
### 29 - Diretiva ngClass
```ts
//No componente:

meuFavorito: boolean = false;

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

//HTML:

<h1>
  <i class="glyphicon"
  [class.glyphicon-star-empty]="!meuFavorito"
  [class.glyphicon-star]="meuFavorito"
  (click)="onClick()"
  ></i>
</h1>

//Indicado uso do ngClass para quando houver mais de uma interação a efeito de evento:

<h1>
  <i class="glyphicon"
  [ngClass]="{
    'glyphicon-star-empty': !meuFavorito,
    'glyphicon-star': meuFavorito
  }"
  (click)="onClick()"
  ></i>
</h1>
```
### 30 - Diretiva ngStyle
```ts
//No componente:

ativo: boolean = false;
tamanhoFonte: number = 10;

 mudarAtivo(){
    this.ativo = !this.ativo;
 }

//HTML:

// Styles com property binding (style binding)

<button
  [style.backgroundColor]="ativo ? 'blue' : 'gray'"
  [style.color]="ativo ? 'white' : 'black'"
  [style.fontWeight]="ativo ? 'bold' : 'normal'"
  [style.fontSize]="tamanhoFonte + 'px'"
  (click)="mudarAtivo()"
>

// Mudar atributo 'ativo'
</button>
<br>
<input type="text" [(ngModel)]="tamanhoFonte">

// Styles com diretiva ngStyle
<button
  [ngStyle]="{
    'backgroundColor': (ativo ? 'blue' : 'gray'),
    'color': (ativo ? 'white' : 'black'),
    'fontWeight': (ativo ? 'bold' : 'normal'),
    'fontSize': tamanhoFonte + 'px'
  }"
  (click)="mudarAtivo()"
>
</button>
```
### 31 - Operador elvis ?
```ts
//No componente:

 tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
    //responsavel : {nome: ''}
  };

 }

//HTML:

<p>Descrição: {{ tarefa.desc }}</p>
<!--p>Responsável: {{ tarefa.responsavel.nome }}</p-->
<!--p>Responsável: {{ tarefa.responsavel != null ? tarefa.responsavel.nome : '' }}</p-->
ou
<p>Responsável: {{ tarefa.responsavel?.usuario?.nome }}</p>

// Com operador elvis fica mais simples de evitar retorno de valores null e ocasionar erro.
```
### 32 - ng-content
```ts
//Exibe o conteúdo conforme seus seletores:

//HTML:

<div class="panel panel-default">
  <div class="panel-heading">
    <ng-content select=".titulo"></ng-content>
  </div>
  <div class="panel-body">
    <ng-content select=".corpo"></ng-content>
  </div>
</div>

// Mais de um seletor/select igual o Angular irá concatenar..
```
### 33 - Criando uma diretiva de atributo:
ElementRef e Renderer
```ts
// ElementRef - Faz referência ao elemento do DOM
// Renderer - Renderizador responsável por fazer modificações no DOM
// No componente/diretiva:

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) {
    // A maneira comentada abaixo deve ser evitada de utilizar, por motivo de abrir brecha para ataques devido à manipulação do DOM
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }
}

//HTML:

<p fundoAmarelo >
  Texto com fundo amarelo.
</p>

<button fundoAmarelo>Botão com fundo amarelo.</button>
```
### 34 - Diretivas: HostListener e HostBinding
```ts
// @HostListener('nomedoevento') - escutar o elemento hospedeiro
// @HostBinding('style.backgroundColor') - permite a associação da diretiva a um determinado atributo HTML
// No componente/diretiva:

import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
      );*/
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
      );*/
      this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra;
    return this.backgroundColor;  
  }
  private backgroundColor: string;

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
    ) { }
}

//HTML:

<p highlightMouse>
  Texto com highlight quando passo o mouse.
</p>
```
### 35 - Diretivas: input e Property Binding
```ts
// No componente/diretiva:

import { Directive, HostListener, HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}

//HTML:
<p [highlight]="'red'" [defaultColor]="'grey'">
  Texto com highlight com cores customizadas.
</p>
```
### 36 - Diretiva ngElse customizada
```ts
// No componente/diretiva:
// hasView - especie de cache para não precisar construir ou desconstruir sempre o template mesmo que o valor mude.

import { Directive, Input,
  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if (!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }
}

//HTML:
<h5>Diretiva Estrutura customizada - ngElse</h5>

<div *ngIf="mostrarCursos" >
  Lista de cursos aqui.
</div>
<div *ngElse="mostrarCursos" >
  Não existem cursos para serem listados.
</div>

<br>
<button (click)="onMostrarCursos()">
  Mostrar ou esconder cursos
</button>
<br>

<!-- Para Angular v4+, usar <ng-template></ng-template> no lugar de <template></template> -->
<ng-template [ngElse]="mostrarCursos">
  <div>
    Não existem cursos para serem listados.
  </div>
</ng-template>
```
### 37 - Introdução a Serviços (Services)
```ts
/*
Buscar/Enviar dados ao Servidor:
Componente -> Serviços(Service) ⚙️ Pode ser injetado em outras classes -> Backend(Node.JS, Java, .NET, Ruby, Python, etc.)

Serviços também é utilizado para não repetir códigos na aplicação, de forma a fornecer a lógica de negócio para os componentes que precisar, assim como classes utilitários.

Conceito DRY - Don't Repeat Yourself!

Componente tem que ser reponsável apenas pela interação da tela com o usuário.
*/
```
### 38 - Criação de Serviços (Services) manualmente
```ts
// Service
export class CursosService {
    getCursos() {
        return ['Angular 2', 'Java', 'Phonegap'];
    }
}

// Componente
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  // Primeiro a ser executado
  constructor() { 
    this.cursosService = new CursosService();
  }

  // ngOnInit método executado quando a classe é inicializada.
  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
}

// HTML
<h5>Lista de cursos</h5>

<ul>
  <li *ngFor="let curso of cursos">
    {{ curso }}
  </li>
</ul>
```

## 📕 Créditos
- [Curso de Angular da Loiane Groner](https://loiane.training/cursos)
- [Documentação do Angular](https://angular.io/docs)

<div align="center"><i>by 💙 Renan Marques</i></div>
