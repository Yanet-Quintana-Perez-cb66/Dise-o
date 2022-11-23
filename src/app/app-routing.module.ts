import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaComponent } from './grafica/grafica.component';
import { ConsecuenciasComponent } from './consecuencias/consecuencias.component';
import { CausasComponent } from './causas/causas.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'causas',
    component:CausasComponent
  },
  {
    path:'grafica',
    component:GraficaComponent
  },
  {
    path:'consecuencias',
    component:ConsecuenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
