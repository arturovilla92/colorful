import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdornoComponent } from './adorno.component';


const routes: Routes = [
  {
    path:'adorno',
    component:AdornoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdornoRoutingModule { }
