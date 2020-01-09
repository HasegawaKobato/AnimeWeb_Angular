import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosterRoutingModule } from './poster-routing.module';
import { PosterComponent } from './poster.component';


@NgModule({
  declarations: [PosterComponent],
  imports: [
    CommonModule,
    PosterRoutingModule
  ],
  exports: [
    PosterComponent
  ]
})
export class PosterModule { }
