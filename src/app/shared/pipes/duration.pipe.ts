import { Pipe, PipeTransform } from '@angular/core';

const MINUTES: number = 60;

@Pipe({
  name: 'convertDuration'
})

export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }

    if (value < 60) {
        return value + ' min';
    }
      
    let minutes = value % MINUTES;
    let hours = (value - minutes) / MINUTES;
    
    if (minutes == 0) {
      return hours + ' h';
    }

    return hours + ' h ' + minutes + ' min';
  }
}
