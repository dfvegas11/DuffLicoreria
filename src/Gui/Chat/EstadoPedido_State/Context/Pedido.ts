import EstadoPedido from "../State/EstadoPedido";

export default class Pedido {
    state: EstadoPedido;

    setState(state: EstadoPedido): void {
        this.state = state;
    }

    respuesta(): string{
        return this.state.estado();
    }
}