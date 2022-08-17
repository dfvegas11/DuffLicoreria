import {saveLocalStorageBuy, removeLocalStorageBuy} from "../interaccion/infoLocalStorage";
import { añadirHistorial, factura } from "../interaccion/printFactura";
import MainEstadoPedido from "../../Gui/Chat/EstadoPedido_State/MainEstadoPedido";

export default class Factura {
    private static instancia: Factura;
    
    private constructor(){}

    static getInstancia(): Factura{
        if(!Factura.instancia){
            Factura.instancia = new Factura();
        }
        return Factura.instancia;
    }

    verificarPago(): void{
        const purchase: any = (e: any) => {
            if(e.target.id.includes("button")){
                let elementCard = document.getElementById(`card-${e.target.id.split('-').pop()}`);
                if(elementCard.getAttribute("name") != "select"){
                    elementCard.style.border = "5px solid rgb(220,20,60)";
                    elementCard.setAttribute("name", "select");
                    saveLocalStorageBuy(document.getElementById(e.target.id).getAttribute("name"));
                }else{
                    elementCard.setAttribute("name", "no-select");
                    elementCard.style.border = "2px solid rgb(26, 25, 25)";
                    removeLocalStorageBuy(document.getElementById(e.target.id).getAttribute("name"))
                }
            }
        }
        document.getElementById("main").addEventListener("click", purchase);
    }

    realizarCompra(): void{
        document.getElementById("realizar-compra").addEventListener("click", () => {
            let elementLocal = JSON.parse(localStorage.getItem("buy"));
            document.getElementById("main").innerHTML = factura(elementLocal);
            document.getElementById("main").innerHTML += MainEstadoPedido.tipoEstado();
            document.getElementById("comprar").style.display = "none";
            añadirHistorial(elementLocal);
        })
    }
}