import { Cerveza, Licor, SinAlcohol } from "./ProductosConcretos";

export default class MainProducto {
    static imprimir(tipo: string): void{
        let sinAlcohol: SinAlcohol = new SinAlcohol();
        let licor: Licor = new Licor(sinAlcohol);
        let cerveza: Cerveza = new Cerveza(licor);

        cerveza.getProducto(tipo);
    }
}