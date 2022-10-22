import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent{

  constructor() { }

  @Input() presupuestoTotal:number = 0;
  @Input() ingreso:number = 0;
  @Input() egreso:number = 0;
  @Input() porcentaje:number = 0;

}
