import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  value: number = 5;

  deleteCycle: boolean = false;

  changesValue(){
    this.value++;
  }

  destroyCycle(){
    this.deleteCycle = true;
  }
}
