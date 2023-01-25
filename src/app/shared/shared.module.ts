import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
