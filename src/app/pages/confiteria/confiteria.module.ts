import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiteriaRoutingModule } from './confiteria-routing.module';
import { ConfiteriaComponent } from './confiteria.component';


@NgModule({
  declarations: [
    ConfiteriaComponent
  ],
  imports: [
    CommonModule,
    ConfiteriaRoutingModule
  ]
})
export class ConfiteriaModule { }
