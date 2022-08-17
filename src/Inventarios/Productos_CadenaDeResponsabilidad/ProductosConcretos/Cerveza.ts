import Producto from "../Interface/Producto";
import imprimirTarjeta from "../../impresion/Tarjeta/imprimirTarjeta";
import MainCerveza from "../../cervezas_AbstractFactory/MainCerveza";

export default class Cerveza implements Producto {

    tipoProducto: string = "cerveza";
    sucesor: Producto;

    constructor(sucesor: Producto){
        this.sucesor = sucesor;
    }

    getProducto(tipo: string): void {
        if(tipo == this.tipoProducto){
            let info: any = [...MainCerveza.printCervezasImportadas(), ...MainCerveza.printCervezasNacionales()];
            info = info.map((element: any, index:number) => {
                element['number'] = index;
                return element;
            })
            imprimirTarjeta(info);
        }else{
            this.sucesor.getProducto(tipo)
        }
    }
}