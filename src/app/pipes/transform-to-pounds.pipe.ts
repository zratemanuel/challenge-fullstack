import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';

@Pipe({
  name: 'transformToPounds'
})
export class transformToPoundsPipe implements PipeTransform {

  constructor(
    private currencyPipe: CurrencyPipe
  ) {}

  transform(value: number): string {
    return this.currencyPipe.transform(value / 100, 'GBP', '', '1.0-0');
  }

}
