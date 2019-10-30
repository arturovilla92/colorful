import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiteriaComponent } from './confiteria.component';


const routes: Routes = [
  {
    path:'confiteria',
    component:ConfiteriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiteriaRoutingModule { }
