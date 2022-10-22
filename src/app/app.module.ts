import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormComponent } from './form/form.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoServicio } from './ingreso/ingresos.servicio';
import { EgresoServicio } from './egreso/egresos.servicio';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [IngresoServicio,EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
