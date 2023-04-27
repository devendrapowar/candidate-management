import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearToMonth'
})
export class YearToMonthPipe implements PipeTransform {

  transform(value: number = 0, ...args: any[]): unknown {
    return value * 12 + ' months';
  }

}
