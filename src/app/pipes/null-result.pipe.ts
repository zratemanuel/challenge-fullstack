import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullResult'
})
export class nullResultPipe implements PipeTransform {

  transform(value: string|number): string {
    if (value === undefined || value === null || value.toString() === '0') {
      return '-';
    }
    return value.toString();
  }

}
