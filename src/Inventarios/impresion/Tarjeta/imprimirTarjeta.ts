import { estructuraBaseTarjetas, estructuraBaseTarjetasFila } from "../impresion";
import Tarjeta from "../../../Gui/Clients/Tarjetas_Prototipo/Tarjeta/Tarjeta";

const imprimirTarjeta = (infoProductos: any): void => {
    document.getElementById("main-buttons").style.display = "none";
    document.getElementById("main").innerHTML = estructuraBaseTarjetas;
    document.getElementById("cards-principal").innerHTML = estructuraBaseTarjetasFila;
    document.getElementById("comprar").style.display = "block";

    let tarjeta: Tarjeta = new Tarjeta();
    tarjeta.color("black");
    tarjeta.bordeado("30px");
    tarjeta.tipoLetra("Arial, Helvetica, sans-serif");

    const contenidoTarjetas: any = [tarjeta];
    const imprimirTarjetas: any = [];
    // const infoProductos: any = MainLicor.printLicor();
    let rowPrint: number = 0;

    for (let index = 0; index < infoProductos.length; index++) {
        imprimirTarjetas.push(contenidoTarjetas[index].setTarjeta(infoProductos[index]));
        if(infoProductos[index].disponibilidad) document.getElementsByClassName("card-row")[rowPrint].innerHTML += contenidoTarjetas[index].setTarjeta(infoProductos[index]);
        contenidoTarjetas.push(contenidoTarjetas[index].clonar());
        if((index+1) % 3 == 0){
            document.getElementById("cards-principal").innerHTML += estructuraBaseTarjetasFila;
            rowPrint += 1;
        } 
    }
}

export default imprimirTarjeta;