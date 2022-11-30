import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
