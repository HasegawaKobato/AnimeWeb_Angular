import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradBookModule } from './trad-book/trad-book.module';
import { JapanBookModule } from './japan-book/japan-book.module';
import { BaseModule } from './base/base.module';
import { AlbumModule } from './album/album.module';
import { DvdModule } from './dvd/dvd.module';
import { CdModule } from './cd/cd.module';
import { ModelModule } from './model/model.module';
import { PosterModule } from './poster/poster.module';
import { MerchandiseModule } from './merchandise/merchandise.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TradBookModule,
    JapanBookModule,
    BaseModule,
    AlbumModule,
    DvdModule,
    CdModule,
    ModelModule,
    PosterModule,
    MerchandiseModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
