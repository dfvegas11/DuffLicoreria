import SinAlcohol from "../Interface/SinAlcohol";

export default class RedBull implements SinAlcohol{
    titulo(): string {
        return "Red Bull lata 250ml";
    }

    descripcion(): string {
        return "250ml, 1 unidad";
    }

    imagen(): string {
        return "./";//Falta aclarar path
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 4900
    }
}