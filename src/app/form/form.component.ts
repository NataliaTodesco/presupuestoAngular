import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egresos.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingresos.servicio';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];
  ingresoServicio:IngresoServicio;
  egresoServicio:EgresoServicio;
  tipo:string = "ingresoOperacion";
  descripcion:string = "";
  valor:number = 0;

  constructor(ingresoServicio:IngresoServicio,egresoServicio:EgresoServicio) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
    this.ingresoServicio = ingresoServicio;
    this.egresoServicio = egresoServicio;
   }

  ngOnInit(): void {
    
  }

  tipoOperacion(){
    if (this.tipo == "ingresoOperacion")
    this.tipo = "egreso";
    else this.tipo = "ingresoOperacion";
  }

  agregarValor(){
    if (this.tipo =="ingresoOperacion"){
      let ingreso = new Ingreso(this.descripcion,this.valor);
      this.ingresoServicio.agregar(ingreso);
    }
    else{
      let egreso = new Egreso(this.descripcion,this.valor);
      this.egresoServicio.agregar(egreso);
    }

  }

}
