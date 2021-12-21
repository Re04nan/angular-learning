import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngif',
  templateUrl: './directives-ngif.component.html',
  styleUrls: ['./directives-ngif.component.scss']
})
export class DirectivesNgifComponent implements OnInit {

  cursos: string[] = ["Angular"];

  mostrarCursos: boolean = false;

  constructor(){}

  onMostrarCursos() { 
    this.mostrarCursos = !this.mostrarCursos 
  };

  ngOnInit(){ 
  }

}
