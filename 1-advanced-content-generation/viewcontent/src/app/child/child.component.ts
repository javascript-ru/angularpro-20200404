import { Component, OnInit, Attribute } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: [
  ],
  providers: [LogService]
})
export class ChildComponent implements OnInit {

  // @Input() name; 

  constructor(@Attribute('name') name: string) { }

  ngOnInit(): void {
  }

}
