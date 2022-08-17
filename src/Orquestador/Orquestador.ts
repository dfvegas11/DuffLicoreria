import GUI from "../Gui/Gui";
import Inventarios from "../Inventarios/Inventarios";
import Pagos from "../Pagos/Pagos";
import { IModerador } from "../Api/Api";

export default class Orquestador implements IModerador{
    moderarComponentes(): void {
        let gui: GUI = new GUI();
        let inventarios: Inventarios = new Inventarios();
        let pagos: Pagos = new Pagos();

        try {
            gui.seguimientoDelPedido();
            gui.regresarInicio();
            gui.limpiarHistorial();
        } catch (error) {
            console.log("no hay GUI");            
        }
        try {
            pagos.confirmarPago();
        } catch (error) {
            console.log("No hay pagos");
        }
        try {
            inventarios.mostrarTipos();
            inventarios.mostrarSinAlcohol();
            inventarios.mostrarLicores();
            inventarios.mostrarCervezas();
        } catch (error) {
            console.log("No hay inventarios");
            console.log(error)      
        }
    }
}