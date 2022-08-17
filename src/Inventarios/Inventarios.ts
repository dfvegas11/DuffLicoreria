import { IInventariable } from "../Api/Api";
import MainProducto from "./Productos_CadenaDeResponsabilidad/MainProducto";
import mainSinAlcohol from "./SinAlcohol_Fabrica/MainSinAlcohol";
import MainLicor from "./licores_Builder/MainLicor";
import MainCerveza from "./cervezas_AbstractFactory/MainCerveza";

export default class Inventarios implements IInventariable{
    
    mostrarTipos(): void {
        let boton = (e: any): any => {
            let typeButton: any = {
                cerveza: "cerveza",
                licores: "licor",
                sin_alcohol: "sinAlcohol"
            }
            //Realizar la accion correspondiente con el evento
            MainProducto.imprimir(typeButton[e.target.id]);
        }
        document.getElementById("buttons").addEventListener("click", boton)
    }

    mostrarSinAlcohol(): void{
        mainSinAlcohol();
    }

    mostrarLicores(): void{
        MainLicor.printLicor();
    }

    mostrarCervezas(): void{
        MainCerveza.printCervezasNacionales();
        MainCerveza.printCervezasImportadas();
    }
}