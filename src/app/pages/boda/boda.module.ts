import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodaRoutingModule } from './boda-routing.module';
import { BodaComponent } from './boda.component';


@NgModule({
  declarations: [
    BodaComponent
  ],
  imports: [
    CommonModule,
    BodaRoutingModule
  ]
})
export class BodaModule { }
