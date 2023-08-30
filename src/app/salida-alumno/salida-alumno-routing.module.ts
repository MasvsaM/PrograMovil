import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalidaAlumnoPage } from './salida-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: SalidaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalidaAlumnoPageRoutingModule {}
