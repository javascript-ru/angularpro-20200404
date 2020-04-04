import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child1Component } from './parent1/child1/child1.component';
import { Child2Component } from './parent1/child2/child2.component';
import { Child3Component } from './parent2/child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
