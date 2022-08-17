import Licor from "../Producto/Licor";

abstract class LicorBuilder {
    licor: Licor;

    constructor(licor: Licor){
        this.licor = licor;
    }

    getLicor(): Licor {
        return this.licor;
    }

    abstract construirTitulo(): void;
    abstract construirDescripcion(): void;
    abstract construirImagen(): void;
    abstract construirDisponibilidad(): void;
    abstract construirPrecio(): void;
}

export default LicorBuilder;