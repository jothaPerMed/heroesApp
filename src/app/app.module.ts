import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutPageComponent } from './auth/pages/layout-page/layout.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { HeroPageComponent } from './heroes/pages/hero-page/hero-page.component';
import { ListPageComponent } from './heroes/pages/list-page/list-page.component';
import { NewPageComponent } from './heroes/pages/new-page/new-page.component';
import { SearchPageComponent } from './heroes/pages/search-page/search-page.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
