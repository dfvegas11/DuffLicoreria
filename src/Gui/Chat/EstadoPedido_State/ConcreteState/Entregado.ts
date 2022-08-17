import EstadoPedido from "../State/EstadoPedido";

export default class Entregado implements EstadoPedido{
    estado(): string {
        return `
            <br>
            <div style="color: #83EE1F">
                <h3>Entregado</h3>
            </div>
        `;
    }
}