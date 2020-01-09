import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { MemberModule } from './member/member.module';
import { CustomerServiceModule } from './customer-service/customer-service.module';
import { ForumModule } from './forum/forum.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    MemberModule,
    CustomerServiceModule,
    ForumModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
