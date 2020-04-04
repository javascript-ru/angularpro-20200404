import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit{

  @Input('delay') delay: number;

  constructor(
    public view: ViewContainerRef,
    private template: TemplateRef<HTMLElement>
  ) { 



  }

  ngOnInit() {
    setTimeout(_ => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }

}

/*

<  ngIf>
<div>
</div>
<>


*/
