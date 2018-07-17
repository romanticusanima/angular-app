import { Pipe, PipeTransform } from '@angular/core';

const MINUTES: number = 60;

@Pipe({
  name: 'convertDuration'
})

export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 60) {
        return value + ' min';
    } else {
      let minutes = value % MINUTES;
      let hours = (value - minutes) / MINUTES;
      if (minutes == 0) {
        return hours + ' h ';
      } else {
        return hours + ' h ' + minutes + ' min';
      }
    }
  }
}
