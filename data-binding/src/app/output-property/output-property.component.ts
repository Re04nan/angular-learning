import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
  //outputs: ['changeValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() counter: number = 0;

  @Output() changeValue = new EventEmitter();

  //@ViewChild('fieldInputDom',  { static: true }) fieldInputValue: ElementRef;
  @ViewChild('fieldInputDom') fieldInputValue: ElementRef;
  //@ViewChild('fieldInputDom') fieldInputValue: HTMLElement;
  
  increase(){
  //console.log(this.fieldInputValue.nativeElement);
    this.fieldInputValue.nativeElement.value++;
  //this.counter ++;
    this.changeValue.emit({newValue: this.counter});
  }
  decreases(){
    this.fieldInputValue.nativeElement.value--;
  //this.counter --;
    this.changeValue.emit({newValue: this.counter});
  }

  constructor(fieldInputValue: ElementRef) { 
    this.fieldInputValue = fieldInputValue;
   }

  ngOnInit(): void {
  }

}
