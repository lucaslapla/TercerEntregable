import { Vehiculo } from "./Vehiculo"; //herencia (Padre )

export class Camion extends Vehiculo{

    private capacidadCarga: number;

    constructor(tipoVehiculo : string , marca: string, modelo:string, patente: string , nroMotor: string, nroChasis: string,capacidadCarga:number){
        super(tipoVehiculo, marca, modelo, patente , nroMotor, nroChasis);
        this.capacidadCarga=capacidadCarga;
    }

    public getcapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setcanPuertas(capacidadCarga:number): void {
        this.capacidadCarga=capacidadCarga;
    }

}