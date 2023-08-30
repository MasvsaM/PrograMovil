import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalidaAlumnoPageRoutingModule } from './salida-alumno-routing.module';

import { SalidaAlumnoPage } from './salida-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidaAlumnoPageRoutingModule
  ],
  declarations: [SalidaAlumnoPage]
})
export class SalidaAlumnoPageModule {}
