import { Component, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parent1',
  template: `
    <p>
      parent1 works!
    </p>
    <app-child1></app-child1>
   <app-child2></app-child2>
  `,
  styles: [
  ],
})
export class Parent1Component implements OnInit {

  constructor(app:ApplicationRef, cd: ChangeDetectorRef) { 

     setTimeout(_ => {
        console.clear()
        //console.log(' app.tick()');
        //app.tick(); 
        // console.log('markForCheck');
        // cd.markForCheck();
        console.log('detectChanges');
        cd.detectChanges();

     }, 5000);

  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('Parent1::ngDoCheck');
  }

}
