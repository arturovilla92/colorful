import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodaComponent } from './boda.component';


const routes: Routes = [
  {
    path:'boda',
    component:BodaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodaRoutingModule { }
