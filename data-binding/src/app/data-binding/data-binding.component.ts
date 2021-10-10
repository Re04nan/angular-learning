import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.scss']
  styles: [
    `.highlight{
      background-color: yellow;
      font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  name :string = 'Renan Marques';
  courseAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/g/400/200/';
  valueActual: string = '';
  valueSave: string = '';
  isMouseOver: boolean = false;

  getValue(){
    return 1;
  };

  getCourse(){
    return true;
  }

  btnClick(){
    return alert("Clicouuu");
  }
  onKeyUp(event: KeyboardEvent){
    this.valueActual=(<HTMLInputElement>event.target).value;
  }
  saveValue(value: string){
    this.valueSave = value;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
