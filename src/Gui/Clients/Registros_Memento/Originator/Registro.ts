export default class Registro {
    compras: any;
    fecha: string;

    constructor(compras: any, fecha : string){
        this.compras = compras;
        this.fecha = fecha 
    }

    getInfo(): any{
        return {
            compras: this.compras,
            fecha: this.fecha
        }
    }
}