import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-nested',
  template: `
    <p>
      nested works!
    </p>
  `,
  styles: [
  ],
})
export class NestedComponent implements OnInit {

  constructor(log: LogService) { }

  ngOnInit(): void {
  }

}
