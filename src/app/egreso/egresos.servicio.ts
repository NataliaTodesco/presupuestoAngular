import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos: Egreso[] = [
        new Egreso("Renta Dpto",900),
        new Egreso("Ropa",200)
    ];

    agregar(egreso:Egreso){
        this.egresos.push(egreso);
    }
    
    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1)
    }
}