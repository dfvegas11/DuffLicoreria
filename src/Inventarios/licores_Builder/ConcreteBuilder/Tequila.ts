import LicorBuilder from "../Abstract/LicorBuilder";
import Licor from "../Producto/Licor";

export default class Tequila extends LicorBuilder{

    constructor(){
        let licor: Licor = new Licor();
        super(licor)
    }

    construirTitulo(): void {
        this.licor.setTitulo("Tequila Jose Cuervo Silver Botella");
    }

    construirDescripcion(): void {
        this.licor.setDescripcion("700ml, 1 unidade(s)");        
    }

    construirImagen(): void {
        this.licor.setImagen("imagen");
    }

    construirDisponibilidad(): void {
        this.licor.setDisponibilidad(true);
    }

    construirPrecio(): void {
        this.licor.setPrecio(68900);
    }
}