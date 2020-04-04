import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule { 
  constructor(injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, {injector});
    customElements.define('my-hello', helloElement);
  }

  ngDoBootstrap() {}
}
