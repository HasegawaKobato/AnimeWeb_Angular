import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JapanBookRoutingModule } from './japan-book-routing.module';
import { JapanBookComponent } from './japan-book.component';


@NgModule({
  declarations: [JapanBookComponent],
  imports: [
    CommonModule,
    JapanBookRoutingModule
  ],
  exports: [
    JapanBookComponent
  ]
})
export class JapanBookModule { }
