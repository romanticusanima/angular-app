import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCreatedDate]'
})

export class CreatedDateDirective implements AfterViewInit {
  @Input() appCreatedDate;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    let today = Date.now();
    let created = new Date(this.appCreatedDate).getTime();
    let twoWeeksAgo = today - 1209600000;

    if (created > today) {
      this.el.nativeElement.style.border = '2px solid #047aff'; //blue
    } else if (created < today && created >= twoWeeksAgo ) {
      this.el.nativeElement.style.border = '2px solid #0bb30b'; //green
    }
  }

}
