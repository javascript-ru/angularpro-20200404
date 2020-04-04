import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{output1}} <br/>
  {{output2}}
  <button (click)="findBigPrime()"></button>
  `,
  styles: []
})
export class AppComponent {
  output1 = 'webwokers';
  output2 = 'webwokers';
  worker;

  constructor() {
    this.worker = new Worker('./my-worker.worker', { type: 'module'});
    
    this.worker.onmessage = ({data}) => {
      this.output2 = data;
    };

    setInterval(_ => {
      this.output1 = Math.random().toString();
    }, 200);
  }

  findBigPrime() {
    // this.output2 = find_big_prime().toString();
    this.worker.postMessage('Hello!');
  }
}




function find_big_prime() {
  let start = Math.floor(Math.random() * 1000000000);
  let is_prime = false;
  while (!is_prime) {
    is_prime = test_prime(start);
    start++;
  }
  return start;
}

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

