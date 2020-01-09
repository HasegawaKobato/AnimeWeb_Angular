import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelRoutingModule } from './model-routing.module';
import { ModelComponent } from './model.component';


@NgModule({
  declarations: [ModelComponent],
  imports: [
    CommonModule,
    ModelRoutingModule
  ],
  exports: [
    ModelComponent
  ]
})
export class ModelModule { }
