import EstadoPedido from "../State/EstadoPedido";

export default class EnBodega implements EstadoPedido{
    estado(): string {
        return `
            <br>
            <div style="color: #EE381F">
                <h3>En Bodega</h3>
            </div>
        `;
    }
}