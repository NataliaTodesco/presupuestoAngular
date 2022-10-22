import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingresos.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso[] = [];
  ingresoServicio:IngresoServicio;

  constructor(ingresoServicio:IngresoServicio) { 
    this.ingresos = ingresoServicio.ingresos;
    this.ingresoServicio = ingresoServicio;
  }

  ngOnInit(): void {
  }

  eliminarIngreso(ingreso:Ingreso){
    this.ingresoServicio.eliminar(ingreso);
  }

}
