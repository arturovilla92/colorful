import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CumpleannosComponent } from './cumpleannos.component';


const routes: Routes = [
  {
    path:'cumpleannos',
    component:CumpleannosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CumpleannosRoutingModule { }
