import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomPreloadingService } from './custom-preloading.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { 
     path: 'lazy', 
     data: {
       preload: true
     },
     loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
