import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvdRoutingModule } from './dvd-routing.module';
import { DvdComponent } from './dvd.component';


@NgModule({
  declarations: [DvdComponent],
  imports: [
    CommonModule,
    DvdRoutingModule
  ],
  exports: [
    DvdComponent
  ]
})
export class DvdModule { }
