import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AniversarioRoutingModule } from './aniversario-routing.module';
import { AniversarioComponent } from './aniversario.component';


@NgModule({
  declarations: [
    AniversarioComponent
  ],
  imports: [
    CommonModule,
    AniversarioRoutingModule
  ]
})
export class AniversarioModule { }
