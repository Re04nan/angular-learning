import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  nomeCursos: string[];

  constructor(private coursesService: CoursesService) {

   /* for (let i=0; i<this.nomeCursos.length; i++){
      let curso = this.nomeCursos[i];
    } */
    
    //var servico = new CoursesService();

    this.nomeCursos = coursesService.getNomeCursos();
  }

  ngOnInit(): void {
  }

}
