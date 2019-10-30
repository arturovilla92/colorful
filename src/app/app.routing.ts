import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';



const routes: Routes = [
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'pages',
        component: TemplateComponent,
        children: [
      {
            path: 'adorno',
            loadChildren: './pages/adorno/adorno.module#AdornoModule'
      },
      {
            path: 'aniversario',
            loadChildren: './pages/aniversario/aniversario.module#AniversarioModule'
      },
      {
            path: 'babyshower',
            loadChildren: './pages/babyshower/babyshower.module#babyshowerModule'
      },
      {
            path: 'boda',
            loadChildren: './pages/boda/boda.module#BodaModule'
      },
      {
            path: 'comunion',
            loadChildren: './pages/comunion/comunion.module#ComunionModule'
      },
      {
            path: 'confiteria',
            loadChildren: './pages/confiteria/confiteria.module#ConfiteriaModule'
      },
      {
            path: 'contacto',
            loadChildren: './pages/contacto/contacto.module#ContactoModule'
      },
      {
            path: 'cumpleannos',
            loadChildren: './pages/cumpleannos/cumpleannos.module#CumpleannosModule'
      },
      {
            path: 'manualidad',
            loadChildren: './pages/manualidad/manualidad.module#ManualidadModule'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }