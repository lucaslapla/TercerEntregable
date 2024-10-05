export class Vehiculo {
    private tipoVehiculo: string;
    private marca: string;
    private modelo: string;
    private patente: string;
    private nroMotor: string;
    private nroChasis: string;
    

    constructor(tipoVehiculo : string , marca: string, modelo:string, patente: string , nroMotor: string, nroChasis: string) {
        this.tipoVehiculo = tipoVehiculo;
        this.marca = marca;
        this.modelo = modelo;
        this.patente= patente;
        this.nroMotor = nroMotor;        
        this.nroChasis = nroChasis;
    }

    //aqui los GET
    public gettipoVehiculo(): string {
        return this.tipoVehiculo;
    }
    
    public getmarca(): string {
        return this.marca;
    }

    public getmodelo(): string {
        return this.modelo;
    }

    public getpatente(): string {
        return this.patente;
    }

    public getnroMotor(): string {
        return this.nroMotor;
    }

    public getnroChasis(): string {
        return this.nroChasis;
    }    


    //Aqui los SET
    public settipoVehiculo(tipoVehiculo:string): void {
        this.tipoVehiculo=tipoVehiculo;
    }
    
    public setmarca(marca:string): void {
        this.marca=marca;
    }

    public setmodelo(modelo:string): void {
        this.modelo=modelo;
    }

    public setpatente(patente:string): void {
        this.patente=patente;
    }

    public setnroMotor(nroMotor:string): void {
        this.nroMotor=nroMotor;
    }

    public setnroChasis(nroChasis:string): void {
        this.nroChasis=nroChasis;
    }    

}

