import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDuration'
})

export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 60) {
        return value + ' min';
    } else {
      let minutes = value % 60;
      let hours = (value - minutes) / 60;
      if (minutes == 0) {
        return hours + ' h ';
      } else {
        return hours + ' h ' + minutes + ' min';
      }
    }
  }
}
