import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: any, searchResult: any): any {
    if (searchResult === undefined) return courses;
    return courses.filter(course => course.title.toLowerCase().includes(searchResult.toLowerCase()));
  }

}
