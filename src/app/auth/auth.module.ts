import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AppModule } from '../app.module';
import { LayoutPageComponent } from './pages/layout-page/layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [LayoutPageComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule

  ]
})
export class AuthModule { }
