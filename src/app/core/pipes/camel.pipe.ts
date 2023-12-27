import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camel',
  standalone: true
})
export class CamelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
