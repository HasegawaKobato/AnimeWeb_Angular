import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdRoutingModule } from './cd-routing.module';
import { CdComponent } from './cd.component';


@NgModule({
  declarations: [CdComponent],
  imports: [
    CommonModule,
    CdRoutingModule
  ],
  exports: [
    CdComponent
  ]
})
export class CdModule { }
