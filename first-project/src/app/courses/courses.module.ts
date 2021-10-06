import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
