import { RegistroAutomotor } from "./RegAutomotor"
import {AutoYCamioneta} from "./AutoyCamionetas"
import {Motocicletas} from "./Motos"
import   * as rsl from "readline-sync"
import { Vehiculo } from "./Vehiculo"

function menuverLista (registrarVehiculo:RegistroAutomotor):void{ //Ver lista de Vehiculos
    const listaVehiculos=registrarVehiculo.getregistrarVehiculo(); //copio los datos del arreglo;
    console.log("numeros de Vehiculos en la Lista: " , listaVehiculos.length);
    
    for (let i:number = 0; i < listaVehiculos.length ; i++){
        setTimeout(() => {
            const vehiculo = listaVehiculos[i];
            console.log(`Vehículo ${i + 1}:`);
            console.log(`  Tipo: ${vehiculo.gettipoVehiculo()}`);
            console.log(`  Marca: ${vehiculo.getmarca()}`);
            console.log(`  Modelo: ${vehiculo.getmodelo()}`);
            console.log(`  Patente: ${vehiculo.getpatente()}`);
            console.log(`  Nro Motor: ${vehiculo.getnroMotor()}`);
            console.log(`  Nro Chasis: ${vehiculo.getnroChasis()}`);
          
        }, 500 * i); // Retraso de 1 segundo multiplicado por el índice
      };
}

function menuAgregarVehiculo(registrarVehiculo:RegistroAutomotor):void{
        //Agrego Vehiculo y lo muestro
        registrarVehiculo.nuevoVehiculo("Camion","Volvo","Standart","OPL 234","mot75933y924","ch37429j829347",15000);
        console.log(registrarVehiculo);
        console.log("==========================Se Agrega Nuevo Camion En ultimo Lugar ============================");
}

function menuModificarVehiculo(registrarVehiculo:RegistroAutomotor):void{
        //Modificar Vehiculo
        registrarVehiculo.modificarVehiculo(vehiculo1);
        console.log("==========================Se Modifico numero de motor del Segundo ============================");
}

function menuEliminarVehiculo(registrarVehiculo:RegistroAutomotor):void{
        //Eliminar Vehiculo y lo muestro
        registrarVehiculo.eliminarVehiculo("OPL 234");//elimino el camnion agegado por metodo
        console.log(registrarVehiculo);
        console.log("==========================Se elimina el Camion ============================");
}

function menuAgregarMoto(registrarVehiculo:RegistroAutomotor):void{ // Agrego una MOTO a la Lista
    //Agrego Vehiculo y lo muestro
    registrarVehiculo.agregarMoto("Moto","Bajaj","Rouser","AD 578 JE","mot486i473","ch34829j84847",300);
    console.log(registrarVehiculo);
    console.log("==========================Se Agrega Nuevo Camion En ultimo Lugar ============================");
}

function menuModificarMoto(registrarVehiculo:RegistroAutomotor):void{
    //Modificar Vehiculo
    registrarVehiculo.modificarMoto(vehiculo5);
    console.log("==========================Se Modifico numero de motor de la MOTO ============================");
}

function menuEliminarMoto(registrarVehiculo:RegistroAutomotor):void{
    //Eliminar Vehiculo y lo muestro
    registrarVehiculo.eliminarMoto("AD 578 JE");//elimino la MOTO agegado por metodo
    console.log(registrarVehiculo);
    console.log("==========================Se elimina MOTO ============================");
}

function menuPrincipal(registrarVehiculo:RegistroAutomotor):void{ // Armo menu para que sea menos engorroso :)
    let selector:number=2;
    while(selector!=0){
        console.log("");
        console.log("*******************************************************")
        console.log("**  Ingrese 0 si deseasalir del menu                 **");
        console.log("**  Ingrese 1 si desea ver la lista de vehiculos     **");
        console.log("**  Ingrese 2 si desea agregar un Vehiculo           **");
        console.log("**  Ingrese 3 si desea modificar motor de vehiculo   **");
        console.log("**  Ingrese 4 si desea eliminar vehiculo             **");
        console.log("**           MENU PARA MOTOS                         **")
        console.log("**  Ingrese 5 si desea agregar una MOTO              **");
        console.log("**  Ingrese 6 si desea modificar motor de la MOTO    **");
        console.log("**  Ingrese 7 si desea eliminar una MOTO             **");
        console.log("*******************************************************")
        
        let aux:number = parseInt(rsl.question("Seleccione la opcion deseada : "), 10);// parseInnt pasa el String a texto;
        selector=aux;
        if (selector==1){
            menuverLista(registrarVehiculo);
        }else if (selector==2){
            menuAgregarVehiculo(registrarVehiculo);
        }else if(selector==3){
            menuModificarVehiculo(registrarVehiculo);
        }else if(selector==4){
            menuEliminarVehiculo(registrarVehiculo);
        }else if (selector==5){

            menuAgregarMoto(registrarVehiculo);
        }else if(selector==6){
            menuModificarMoto(registrarVehiculo);
        }else if(selector==7){
            menuEliminarMoto(registrarVehiculo);        

        }else if(selector<0 || selector>8){
            console.log("El numero ingresado no esta en el menu, prueve nuevamente");
        }else{
            console.log("Gracias por Su visita");
        }
    }
}

    // Crear Vehiculos
    const vehiculo1: AutoYCamioneta = new AutoYCamioneta ("Auto","Fiat","Duna","ADR 700","MOT2344B234","CH234688",4 );
    const vehiculo2: AutoYCamioneta = new AutoYCamioneta("Auto","Renaul","Sandero","AA 345 DR","MOT67T903","CH67890",5);
    const vehiculo3: AutoYCamioneta = new AutoYCamioneta("Camioneta","Chevrolet","S-10","OLP 345","MOT345R67","CH35678",2);
    const vehiculo4: AutoYCamioneta = new AutoYCamioneta("Camioneta","Nissan","Frontier","RDT 367" ,"MOT27T349","CH237640",4);
    const vehiculo5: Motocicletas= new Motocicletas("MOTO","Yamaha","FZ-16","AC 987 RE" ,"MOT1234J239","CH928672",150);
    const vehiculo6: Motocicletas = new Motocicletas("MOTO","Honda","Twister","AD 789 DE" ,"MOT12J2345","CH723672",250);

    //Carga registro
    const registrarVehiculo= new RegistroAutomotor ([vehiculo1, vehiculo2,vehiculo3,vehiculo4,vehiculo5,vehiculo6]);

menuPrincipal(registrarVehiculo);

