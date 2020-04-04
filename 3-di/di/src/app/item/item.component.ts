import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-item',
  template: `
    <p>
      item works!
    </p>
    <app-nested></app-nested>

    <ng-content></ng-content>
  `,
    // providers: [LogService],
    viewProviders: [LogService]
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
