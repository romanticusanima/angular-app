import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CreatedDateDirective } from './directives/created-date.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe,
    DurationPipe,
    OrderByPipe,
    CreatedDateDirective,
    LoaderComponent
  ],
  exports: [
    FilterPipe,
    DurationPipe,
    OrderByPipe,
    CreatedDateDirective,
    LoaderComponent
  ],
  providers: [
    LoaderService
  ]
})

export class SharedModule { }
