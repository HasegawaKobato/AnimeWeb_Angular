import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradBookRoutingModule } from './trad-book-routing.module';
import { TradBookComponent } from './trad-book.component';


@NgModule({
  declarations: [TradBookComponent],
  imports: [
    CommonModule,
    TradBookRoutingModule
  ],
  exports: [
    TradBookComponent
  ]
})
export class TradBookModule { }
