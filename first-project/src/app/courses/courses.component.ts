import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  nomeCursos: string[] = ['Angular', 'Java', 'Spring Boot', 'Reactjs', 'Nodejs'];

  constructor() {

    for (let i=0; i<this.nomeCursos.length; i++){
      let curso = this.nomeCursos[i];
    }
  }

  ngOnInit(): void {
  }

}
