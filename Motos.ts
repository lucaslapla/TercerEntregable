import { Vehiculo } from "./Vehiculo"; //herencia (Padre )

export class Motocicletas extends Vehiculo{

    private cilindrada: number;

    constructor (tipoVehiculo : string , marca: string, modelo:string, patente: string , nroMotor: string, nroChasis: string,cilindrada:number){
        super(tipoVehiculo, marca, modelo, patente , nroMotor, nroChasis);
        this.cilindrada=cilindrada;
        if (cilindrada==undefined){
            this.cilindrada=0;
        }else{  this.cilindrada = cilindrada;
        }
    }

    public getcilindrada(): number {
        return this.cilindrada;
    }

    public setcilindrada(cilindrada:number): void {
        this.cilindrada=cilindrada;
    }

}