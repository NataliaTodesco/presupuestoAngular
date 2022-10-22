import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egresos.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso[] = [];
  egresoServicio: EgresoServicio;
  @Input() porcent:number = 0;

  constructor(egresoServicio:EgresoServicio) {
    this.egresos = egresoServicio.egresos;
    this.egresoServicio = egresoServicio;
   }

  ngOnInit(): void {
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  porcentaje(egreso:Egreso){
    return Math.round(egreso.valor / this.porcent*100);
  }
}
