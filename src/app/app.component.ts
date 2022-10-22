import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egresos.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingresos.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(ingresoServicio:IngresoServicio, egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }


  calcularIngresos(){
    let aux:number = 0;

    for (let ingreso of this.ingresos) {
      aux += ingreso.valor;  
    }

    return aux;
  }

  calcularEgresos(){
    let aux:number = 0;

    for (let egreso of this.egresos) {
      aux += egreso.valor;  
    }

    return aux;
  }

  calcularPorcentaje(){
    return Math.round(this.calcularEgresos()/this.calcularIngresos()*100);
  }

  calcularPresupuesto(){
    return this.calcularIngresos()-this.calcularEgresos();
  }
}
