import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { ZoneComponent } from './zone/zone.component';
import { OnsaleComponent } from './onsale/onsale.component';
import { PopularComponent } from './popular/popular.component';
import { KeywordComponent } from './keyword/keyword.component';
import { NewComponent } from './new/new.component';
import { ComingTvOriBookComponent } from './coming-tv-ori-book/coming-tv-ori-book.component';
import { ComingTvTradBookComponent } from './coming-tv-trad-book/coming-tv-trad-book.component';
import { ZoneMoreComponent } from './zone/zone-more/zone-more.component';
import { ProductIntroductionComponent } from './product-introduction/product-introduction.component';
import { TypeComponent } from './product-introduction/type/type.component';
import { IntroductionComponent } from './product-introduction/introduction/introduction.component';
import { ElseProductComponent } from './product-introduction/else-product/else-product.component';
import { ZoneDetailComponent } from './zone/zone-detail/zone-detail.component';
import { NewDetailComponent } from './new/new-detail/new-detail.component';
import { ComingTvOriBookDetailComponent } from './coming-tv-ori-book/coming-tv-ori-book-detail/coming-tv-ori-book-detail.component';
import { ComingTvTradBookDetailComponent } from './coming-tv-trad-book/coming-tv-trad-book-detail/coming-tv-trad-book-detail.component';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [ZoneComponent, OnsaleComponent, PopularComponent, KeywordComponent, NewComponent, ComingTvOriBookComponent,
    ComingTvTradBookComponent, ZoneMoreComponent, ProductIntroductionComponent, TypeComponent, IntroductionComponent,
    ElseProductComponent, ZoneDetailComponent, NewDetailComponent, ComingTvOriBookDetailComponent, ComingTvTradBookDetailComponent, BaseComponent],
  imports: [
    CommonModule,
    BaseRoutingModule
  ],
  exports: [BaseComponent, ZoneMoreComponent, ZoneDetailComponent, NewDetailComponent, ComingTvOriBookDetailComponent, ComingTvTradBookDetailComponent, ProductIntroductionComponent]
})
export class BaseModule { }
