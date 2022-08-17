import Producto from "../Interface/Producto";
import mainSinAlcohol from "../../SinAlcohol_Fabrica/MainSinAlcohol";
import imprimirTarjeta from "../../impresion/Tarjeta/imprimirTarjeta";

export default class SinAlcohol implements Producto {

    tipoProducto: string = "sinAlcohol";

    getProducto(tipo: string): void {
        imprimirTarjeta(mainSinAlcohol());
    }
}