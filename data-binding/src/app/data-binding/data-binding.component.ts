import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  name :string = 'Renan Marques';
  courseAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/g/400/200/';

  getValue(){
    return 1;
  };

  getCourse(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
