import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunionComponent } from './comunion.component';


const routes: Routes = [
  {
    path:'comunion',
    component:ComunionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunionRoutingModule { }
