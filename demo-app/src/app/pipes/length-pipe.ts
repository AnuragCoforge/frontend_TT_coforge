import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
})
export class LengthPipe implements PipeTransform {

  transform(str: string): unknown {
    return str.length;
  }

}
