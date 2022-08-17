import LicorBuilder from "../Abstract/LicorBuilder";
import Licor from "../Producto/Licor";

export default class Muestra {
    licorBuilder: LicorBuilder;
    
    setLicorBuilder(licorBuilder: LicorBuilder): void{
        this.licorBuilder = licorBuilder;
    }

    getLicorBuilder(): Licor{
        return this.licorBuilder.getLicor();
    }

    construirLicor(): void{
        this.licorBuilder.construirTitulo();
        this.licorBuilder.construirDescripcion();
        this.licorBuilder.construirImagen();
        this.licorBuilder.construirDisponibilidad();
        this.licorBuilder.construirPrecio();
    }
}