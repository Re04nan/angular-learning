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