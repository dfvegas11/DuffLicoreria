import Producto from "../Interface/Producto";
import MainLicor from "../../licores_Builder/MainLicor";
import imprimirTarjeta from "../../impresion/Tarjeta/imprimirTarjeta";

export default class Licor implements Producto {

    tipoProducto: string = "licor";
    sucesor: Producto;

    constructor(sucesor: Producto){
        this.sucesor = sucesor;
    }

    getProducto(tipo: string): void {
        if(tipo == this.tipoProducto){
            imprimirTarjeta(MainLicor.printLicor());
        }else{
            this.sucesor.getProducto(tipo)
        }
    }
}