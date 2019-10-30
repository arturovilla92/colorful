import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AniversarioComponent } from './aniversario.component';


const routes: Routes = [
  {
    path:'aniversario',
    component:AniversarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AniversarioRoutingModule { }
