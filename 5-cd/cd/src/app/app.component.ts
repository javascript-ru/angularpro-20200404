import { Component, ApplicationRef, NgZone, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-parent1></app-parent1>
    <app-parent2></app-parent2>
     <!-- {{title}}
     <input (input)="title = $event.target.value"> -->
  `,
  styles: []
})
export class AppComponent implements DoCheck {
  title = 'cd';
  constructor(app: ApplicationRef, ngZone: NgZone) {

    // setInterval(_ => {
    //   app.tick();
    // }, 200);

    // ngZone.onMicrotaskEmpty.subscribe();

  }

  ngDoCheck() {

  }
}
