 
import * as rsl from "readline-sync"
import { Vehiculo } from "./Vehiculo"
import { Camion } from "./Camiones"
import { Motocicletas } from "./Motos";

export class RegistroAutomotor {
    private registrarVehiculo: Vehiculo[];

    constructor (registrarVehiculo:Vehiculo[]){
        this.registrarVehiculo=registrarVehiculo;
    }

    public getregistrarVehiculo():Vehiculo[]{
        return this.registrarVehiculo;
    }

    public setregistrarVehiculo(registrarVehiculo:Vehiculo[]):void{
        this.registrarVehiculo=registrarVehiculo;
    }

    public nuevoVehiculo(tipoVehiculo:string, marca:string, modelo:string, patente:string, nroMotor:string, nroChasis:string, capacidadCarga:number):void{
        let agregarVehiculo: Camion= new Camion (tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis, capacidadCarga);
        if(!this.registrarVehiculo.some (
            lib=> lib.getnroChasis()==nroChasis && lib.getnroMotor()==nroMotor )){// miro si el chasis o motor estan repetidos.
            this.registrarVehiculo.push(agregarVehiculo);
        }else{
            console.log("el vehiculo ya esta en la lista");
        }
    }

    public eliminarVehiculo(patenteAEliminar:string):void{
        this.registrarVehiculo = this.registrarVehiculo.filter(vehiculo => vehiculo.getpatente() !== patenteAEliminar);
    }
    
    public modificarVehiculo(vehiculoAModificar:Vehiculo):void{// Elijo el Motor Pq el resto me parece dificil de Modificar :)
        console.log("Del siguiente vehiculo solo podra modificar el Motor");
        console.log(vehiculoAModificar);
        let nuevoMotor:string= rsl.question("Ingrese nuevo numero de motor :");
        console.log(nuevoMotor)
        vehiculoAModificar.setnroMotor(nuevoMotor);
        console.log(vehiculoAModificar);
    }

    public agregarMoto(tipoVehiculo:string, marca:string, modelo:string, patente:string, nroMotor:string, nroChasis:string, cilindrada:number):void{
        let agregarVehiculo: Motocicletas =new Motocicletas (tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis, cilindrada);
        if(!this.registrarVehiculo.some (
            lib=> lib.getnroChasis()==nroChasis && lib.getnroMotor()==nroMotor )){// miro si el chasis o motor estan repetidos.
            this.registrarVehiculo.push(agregarVehiculo);
        }else{
            console.log("el vehiculo ya esta en la lista");
        }
    }    

    public modificarMoto(vehiculoAModificar:Motocicletas):void{// Elijo el Motor 
        console.log("La siguiente Moto solo podra modificar el Motor");
        console.log(vehiculoAModificar);
        let nuevoMotor:string= rsl.question("Ingrese nuevo numero de motor :");
        let nuevaCilindrada:number = rsl.question("Ingrese la Cilindrada :");
        vehiculoAModificar.setnroMotor(nuevoMotor);
        vehiculoAModificar.setcilindrada(nuevaCilindrada);
        console.log(vehiculoAModificar);
    }

    public eliminarMoto(patenteAEliminar:string):void{
        this.registrarVehiculo = this.registrarVehiculo.filter(vehiculo => vehiculo.getpatente() !== patenteAEliminar);
    }

}

