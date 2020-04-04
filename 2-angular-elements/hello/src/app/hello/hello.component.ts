import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p (click)="onClick()">
      hello, {{name}} works!
    </p>
  `,
  styles: [
  ],
})
export class HelloComponent implements OnInit {

  @Input('name') name: string;
  @Output() clicked = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked.emit(this.name);
  }

}
