import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  template: `
    <p>
      child3 works!
    </p>
  `,
  styles: [
  ],
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('Child3::ngDoCheck');
  }

}
