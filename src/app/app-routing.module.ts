import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MemberComponent } from './member/member/member.component';
import { CustomerServiceComponent } from './customer-service/customer-service/customer-service.component';
import { ForumComponent } from './forum/forum/forum.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'home',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'member',
  component: MemberComponent
}, {
  path: 'cs',
  component: CustomerServiceComponent
}, {
  path: 'forum',
  component: ForumComponent
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
