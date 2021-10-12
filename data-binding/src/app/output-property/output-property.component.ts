import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
  //outputs: ['changeValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() counter: number = 0;

  @Output() changeValue = new EventEmitter();

  increase(){
    this.counter ++;
    this.changeValue.emit({newValue: this.counter});
  }
  decreases(){
    this.counter --;
    this.changeValue.emit({newValue: this.counter});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
