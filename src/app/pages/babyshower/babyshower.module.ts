import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BabyshowerRoutingModule } from './babyshower-routing.module';
import { BabyshowerComponent } from './babyshower.component';


@NgModule({
  declarations: [
    BabyshowerComponent
  ],
  imports: [
    CommonModule,
    BabyshowerRoutingModule
  ]
})
export class BabyshowerModule { }
