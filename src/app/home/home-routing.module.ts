import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductIntroductionComponent } from './base/product-introduction/product-introduction.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'productIntroduction',
    component: ProductIntroductionComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
