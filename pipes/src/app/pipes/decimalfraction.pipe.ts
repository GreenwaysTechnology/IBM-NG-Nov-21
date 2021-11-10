import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalfraction'
})
export class DecimalfractionPipe implements PipeTransform {

  transform(value: number, numberofDigits: number = 1): unknown {
    console.log('pipe is working', value, numberofDigits)
    return value.toFixed(numberofDigits)
  }

}
