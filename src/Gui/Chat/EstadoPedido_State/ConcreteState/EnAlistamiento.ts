import EstadoPedido from "../State/EstadoPedido";

export default class EnAlistamiento implements EstadoPedido{
    estado(): string {
        return `
            <br>
            <div style="color: #EE801F">
                <h3>En Alistamiento</h3>
            </div>
        `;
    }
}