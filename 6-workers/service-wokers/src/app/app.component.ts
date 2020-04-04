import { Component, ApplicationRef } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { interval } from 'rxjs';
import { filter, exhaustMap } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  template: `
    Subscription 
  `,
  styles: []
})
export class AppComponent {
  title = 'service-wokers';

  constructor(swPush: SwPush, swUpdate: SwUpdate, app: ApplicationRef, snackbar: MatSnackBar) {
    swUpdate.available.subscribe(event => {
      const snack = snackbar.open('New version of application...', 'Reload');
      snack.onAction().subscribe(_ => {
        swUpdate.activateUpdate().then(_ => document.location.reload());
      });
    });

    const each10Seconds$ = interval(10 * 1000);
    const appStable$ = app.isStable.pipe(filter(Boolean));
    appStable$.pipe(exhaustMap(_ => each10Seconds$)).subscribe(_ => {
      console.log('checkForUpdate');
      swUpdate.checkForUpdate();
    });


    swPush.messages.subscribe(message => {
      console.log(message);
    });

    const serverPublicKey = "BF1fCE96xfWo4wLlRdkXR9Bg4aimcxY97sE_SEPZUkmld3aztyua2JpXBb8cV7nJBtYtb5Gwseqrf9cn05D5AtY";
    swPush.requestSubscription({ serverPublicKey }).then(pushSubscription => {
      console.log(pushSubscription.toJSON());
    });

  }
}
