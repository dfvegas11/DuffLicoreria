import Historial from "../../Gui/Clients/Registros_Memento/Historial/Historial";

const factura = (elementLocal: any): any => {
    let total: number = 0;
    elementLocal.forEach((element:any) => {
        total += parseInt(element.value);
    });
    return `
    <div>
        <h2>Elementos comprados</h2>
        <ul>
        ${elementLocal.map((element: any) => {
            return "<li> <strong>Titulo:</strong> " + element.title + " <strong>Descripcion: </strong>"+element.description+"</li>";
        })}
        </ul>
        <br>
        <h3>Total a pagar: $${total}</h3>
    </div>
`
}

const añadirHistorial = (data: any): any => {
    const historial = new Historial();
    let today = new Date();
    historial.agregarRegistro(data, today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ '  '+ today.getHours() + ':' + today.getMinutes());
    historial.generarBackup();
    document.getElementById("historial").innerHTML = historial.mostrarInformacion();
}

export {
    factura,
    añadirHistorial
}