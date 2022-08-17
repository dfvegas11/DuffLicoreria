import { IChat, IClientes } from "../Api/Api";
import MainEstadoPedido from "./Chat/EstadoPedido_State/MainEstadoPedido";
import Historial from "./Clients/Registros_Memento/Historial/Historial";

export default class GUI implements IChat, IClientes{
    seguimientoDelPedido(): void {
        MainEstadoPedido.tipoEstado();
    }

    regresarInicio(): void {
        document.getElementById("inicio").addEventListener("click", () =>{
            document.getElementById("main-buttons").style.display = "block";
            document.getElementById("comprar").style.display = "none";
            document.getElementById("main").innerHTML = "";
            localStorage.removeItem("buy");
        })
    }

    limpiarHistorial(): void {
        document.getElementById("borrar-historial").addEventListener("click", () => {
            const historial = new Historial();
            historial.limpiarHistorial();
        })
    }
}