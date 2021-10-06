import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getNomeCursos(){
    return ['Angular', 'Java', 'Spring Boot', 'Reactjs', 'Nodejs'];
  }
}
