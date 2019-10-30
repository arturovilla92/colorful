import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualidadComponent } from './manualidad.component';


const routes: Routes = [
  {
    path:'manualidad',
    component:ManualidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualidadRoutingModule { }
