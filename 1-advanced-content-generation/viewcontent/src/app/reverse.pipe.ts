import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('transform');
    return value.split('').reverse().join('');
  }

}




/*

function sum(a,b) {
  return a + b;
}

- l11n
- date/time

*/
