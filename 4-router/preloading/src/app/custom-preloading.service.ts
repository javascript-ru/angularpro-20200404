import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {

    if(route.data.preload){
      return of(true).pipe(delay(5000), flatMap(_ => load()));
    }

    return of(false);
  };
}
