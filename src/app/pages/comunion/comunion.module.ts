import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunionRoutingModule } from './comunion-routing.module';
import { ComunionComponent } from './comunion.component';


@NgModule({
  declarations: [
    ComunionComponent
  ],
  imports: [
    CommonModule,
    ComunionRoutingModule
  ]
})
export class ComunionModule { }
