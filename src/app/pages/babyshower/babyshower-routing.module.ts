import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabyshowerComponent } from './babyshower.component';


const routes: Routes = [
  {
    path:'babyshower',
    component:BabyshowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BabyshowerRoutingModule { }
