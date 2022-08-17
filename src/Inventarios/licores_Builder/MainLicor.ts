import Muestra from "./Director/Muestra";
import LicorBuilder from "./Abstract/LicorBuilder";
import { Aguardiente, Ginebra, Ron, Tequila, Whisky } from "./ConcreteBuilder";

export default class MainLicor{
    static printLicor(): any{
        let licores: any = [];
        let licor: Muestra = new Muestra();
        let aguardiente: LicorBuilder = new Aguardiente();
        let ginebra: LicorBuilder = new Ginebra();
        let ron: LicorBuilder = new Ron();
        let tequila: LicorBuilder = new Tequila();
        let whisky: LicorBuilder = new Whisky();

        licor.setLicorBuilder(aguardiente);
        licor.construirLicor();
        licores.push(licor.getLicorBuilder());
        
        licor.setLicorBuilder(ginebra);
        licor.construirLicor();
        licores.push(licor.getLicorBuilder());

        licor.setLicorBuilder(ron);
        licor.construirLicor();
        licores.push(licor.getLicorBuilder());

        licor.setLicorBuilder(tequila);
        licor.construirLicor();
        licores.push(licor.getLicorBuilder());

        licor.setLicorBuilder(whisky);
        licor.construirLicor();
        licores.push(licor.getLicorBuilder());

        const info = licores.map((element: any, index: number) => {
            return {
                number: index,
                titulo: element.titulo,
                descripcion: element.descripcion,
                imagen: element.imagen,
                precio: element.precio,
                disponibilidad: element.disponibilidad
            }
        })

        return info;
    }
}