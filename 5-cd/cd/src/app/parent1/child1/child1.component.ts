import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works!
    </p>
  `,
  styles: [
  ],
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('Child1::ngDoCheck');
  }

}
