import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  //inputs: ['nameCourse:course']
})
export class InputPropertyComponent implements OnInit {

  @Input('course') nameCourse: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
