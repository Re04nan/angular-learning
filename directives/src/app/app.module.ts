import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesNgifComponent } from './directives-ngif/directives-ngif.component';
import { TesteDirective } from './teste.directive';
import { TestePipe } from './teste.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesNgifComponent,
    TesteDirective,
    TestePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
