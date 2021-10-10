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
### 4 - Módulos no Angular
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
### 5 - Diretivas
```ts
*ngFor// repetição
*ngIf // condicional
[ngClass] // Classes com condicional
[ngStyle] // adiciona um estilo embutido a uma tag específica
...
```
### 6 - Criando um Serviço
```ts
// criando um serviço atráves do terminal
ng g s <nome-do-servico>| ng generate service <nome-do-servico>

decorators (anotações) @Injectable do @angular/core // No Angular a DI (Injeção de Dependência) ocorre atráves do construtor.

//modelo de responsabilidade
componente -> serviço -> backend (java, c#, php, etc...)
```
### 7 - Property Binding
```ts
//Data Binding
<template> <- {component}
	   <- {{valor}} // Interpolation (Interpolação)
	   <- [propriedade]="valor" // Attribute binding ou bind-propriedade="valor"
	   -> (evento)="handler"// Event binding
	   <-> [(ngModel)]="propriedade" // Two way binding

//Quando não existe uma propriedade no elemento, usa-se [attr.colspan]
```
### 8 - Class e Style Binding
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
### 9 - Event Binding
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
