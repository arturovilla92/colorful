import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdornoRoutingModule } from './adorno-routing.module';
import { AdornoComponent } from './adorno.component';


@NgModule({
  declarations: [
    AdornoComponent
  ],
  imports: [
    CommonModule,
    AdornoRoutingModule
  ]
})
export class AdornoModule { }
