import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../../layouts/default/default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DefaultModule { }
