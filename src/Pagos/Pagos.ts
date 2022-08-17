import { IRecaudo } from "../Api/Api";
import Factura from "./Factura_Singleton/Factura";

export default class Pagos implements IRecaudo{
    confirmarPago(): void {
        const factura = Factura.getInstancia();
        factura.verificarPago();
        factura.realizarCompra();
    }
}