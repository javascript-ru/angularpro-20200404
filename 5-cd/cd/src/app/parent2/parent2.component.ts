import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template: `
    <p>
      parent2 works!
    </p>
    <app-child3></app-child3>
  `,
  styles: [
  ],
})
export class Parent2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('Parent2::ngDoCheck');
  }

}
