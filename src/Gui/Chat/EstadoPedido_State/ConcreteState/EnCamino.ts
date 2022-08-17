import EstadoPedido from "../State/EstadoPedido";

export default class EnCamino implements EstadoPedido{
    estado(): string {
        return `
            <br>
            <div style="color: #EEE81F">
                <h3>En Camino</h3>
            </div>
        `;
    }
}