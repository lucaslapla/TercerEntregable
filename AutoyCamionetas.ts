import { Vehiculo } from "./Vehiculo"; //herencia (Padre )

export class AutoYCamioneta extends Vehiculo{

    private cantPuertas: number; //herencia para cantidad de puertas

    constructor(tipoVehiculo : string , marca: string, modelo:string, patente: string , nroMotor: string, nroChasis: string, cantPuertas:number){
        super(tipoVehiculo, marca, modelo, patente , nroMotor, nroChasis);
        this.cantPuertas=cantPuertas;
    }

    public getcantPuertas(): number {
        return this.cantPuertas;
    }

    public setcanPuertas(cantPuertas:number): void {
        this.cantPuertas=cantPuertas;
    }

}