import { 
  AfterContentChecked,
  AfterContentInit, 
  AfterViewChecked, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() startValue: number = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit(){
    this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
