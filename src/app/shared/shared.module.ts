import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CreatedDateDirective } from './directives/created-date.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe,
    DurationPipe,
    OrderByPipe,
    CreatedDateDirective
  ],
  exports: [
    FilterPipe,
    DurationPipe,
    OrderByPipe,
    CreatedDateDirective
  ]
})

export class SharedModule { }
