import Memento from "../Memento/Memento";
import Registro from "../Originator/Registro";

export default class Historial {
    memento: Memento;
    registro: Registro;

    constructor(){
        this.memento = new Memento();
    }

    agregarRegistro(compras: any, fecha:string): void{
        let title = compras.map((element: any) => element.title);
        this.registro = new Registro(title, fecha);
    }

    limpiarHistorial(): void{
        localStorage.removeItem('historial');
        document.getElementById("historial").innerHTML = "";
    }

    mostrarInformacion(): string{
        let data: any = this.memento.getBackup();
        return`
            <div>
                ${data.map((element:any) => {
                    return `<h4>Fecha de compra: ${element.fecha}</h4>
                    <ul>
                        ${element.compras.map((compra: any) => {
                            return `<li>${compra}</li>`
                        })}
                    </ul>
                    `
                })}
            </div>
        `
    }

    generarBackup(): void{
        this.memento.setBackup(this.registro.getInfo())
    }

    getTamañoBackup(): void{
        this.memento.getSize();
    }


}