import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

const UPCOMING_COURSE_BORDER: string = '2px solid #047aff'; //blue
const FRESH_COURSE_BORDER: string = '2px solid #0bb30b'; //green
const TWO_WEEKS: number = 1209600000;

@Directive({
  selector: '[appCreatedDate]'
})

export class CreatedDateDirective implements AfterViewInit {
  @Input() appCreatedDate;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const today = Date.now();
    const created = new Date(this.appCreatedDate).getTime();
    const twoWeeksAgo = today - TWO_WEEKS;

    if (created > today) {
      this.el.nativeElement.style.border = UPCOMING_COURSE_BORDER;
    } else if (created < today && created >= twoWeeksAgo ) {
      this.el.nativeElement.style.border = FRESH_COURSE_BORDER;
    }
  }

}
