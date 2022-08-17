import { Entregado, EnAlistamiento, EnBodega, EnCamino } from "./ConcreteState"
import Pedido from "./Context/Pedido";
import EstadoPedido from "./State/EstadoPedido"

export default class MainEstadoPedido {
    static tipoEstado(): string{
        let enBodega: EstadoPedido = new EnBodega();
        let enAlistamiento: EstadoPedido = new EnAlistamiento();
        let enCamino: EstadoPedido = new EnCamino();
        let entregado: EstadoPedido = new Entregado();
        let pedido: Pedido = new Pedido();
        
        let list: any = [enBodega, enAlistamiento, enCamino, entregado]
        pedido.setState(list[Math.floor(Math.random() * 4)]);
        return pedido.respuesta();
    }
}