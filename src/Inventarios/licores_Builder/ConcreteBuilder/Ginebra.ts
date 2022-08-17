import LicorBuilder from "../Abstract/LicorBuilder";
import Licor from "../Producto/Licor";

export default class Ginebra extends LicorBuilder{

    constructor(){
        let licor: Licor = new Licor();
        super(licor)
    }

    construirTitulo(): void {
        this.licor.setTitulo("Ginebra Gordons botella 700ml");
    }

    construirDescripcion(): void {
        this.licor.setDescripcion("750ml, 1 unidade(s)");
    }

    construirImagen(): void {
        this.licor.setImagen("imagen");
    }

    construirDisponibilidad(): void {
        this.licor.setDisponibilidad(true);
    }

    construirPrecio(): void {
        this.licor.setPrecio(59990);
    }
}