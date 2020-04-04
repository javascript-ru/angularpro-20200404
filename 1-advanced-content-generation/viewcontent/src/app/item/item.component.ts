import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MarkerDirective } from '../marker.directive';
import { LogService } from '../log.service';
import { BannerComponent } from '../banner/banner.component';
import { Banner2Component } from '../banner2/banner2.component';

@Component({
  selector: 'app-item',
  template: `
    <!-- <div *delay="1000">content1</div>
    <div *delay="2000">content2</div>
    <div *delay="3000">content3</div> -->
<!-- 


    <ng-container *ngTemplateOutlet=""></ng-container> 
    <ng-container *ngComponentOutlet="dynamicComponent"></ng-container> -->

    <!-- <button (click)="getLazy()"></button> -->

    {{'Hello' | reverse}}
    {{'SAlut' | reverse}}
    {{'Hello' | reverse}}

    <input (input)="getLazy()">

    <!-- <input (input)=""> -->

    <!-- <p colory #c="colory">
      item works!
    </p> 
    <button (click)="c.changeColor('green')">Make Green!</button>
    <input (input)="c.changeColor($event.target.value)">
    <div #h colory>My Div</div>
    <app-child></app-child>
    <app-child marker></app-child>
    <app-child marker></app-child> -->
  `,
  styles: [
  ],
})
export class ItemComponent implements OnInit, AfterViewInit, AfterContentInit {

  // @ViewChild('h', { static: false } ) element: ElementRef;
  // @ViewChild(ChildComponent, { static: false } ) element: ElementRef;
  // @ViewChild(MarkerDirective, { static: false } ) element: ElementRef;
  // @ViewChildren(MarkerDirective, { read: ChildComponent } ) elements;
  // @ViewChildren(LogService, { read: ChildComponent } ) elements: QueryList<ChildComponent>;
  // @ContentChild('h', { static: false } ) element: ElementRef;

  dynamicComponent; 
  

  constructor(
    private cfr: ComponentFactoryResolver,
    private view: ViewContainerRef
  ) { }

  ngOnInit(): void {
    //const bannerComponentFactory = this.cfr.resolveComponentFactory(BannerComponent);
    //const bannerComponent = this.view.createComponent(bannerComponentFactory);

    this.dynamicComponent = BannerComponent;

    setTimeout(_ => {
      this.dynamicComponent = Banner2Component;
    }, 3000);

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  async getLazy() {
    const { LazyComponent } = await import('../lazy/lazy.component');
    const lazyComponentFactory = this.cfr.resolveComponentFactory(LazyComponent);
    const lazyComponent = this.view.createComponent(lazyComponentFactory);
  }
   

}
