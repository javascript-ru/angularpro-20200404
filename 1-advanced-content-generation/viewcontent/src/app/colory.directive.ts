import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[colory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  @HostBinding('style.color') color = 'green';

  constructor() { }

  changeColor(color: string) {
     this.color = color;
  }

}
