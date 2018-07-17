import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(courses: any[], searchResult: string): any[] {
    if (searchResult === undefined) {
      return courses;
    }
    return courses.filter(course => {
      return course.title.toLowerCase().includes(searchResult.toLowerCase())
    });
  }
}
