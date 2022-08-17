import SinAlcohol from "../Interface/SinAlcohol";

export default class Tonica implements SinAlcohol{
    titulo(): string {
        return "Tónica Schweppes Dry botella 300ml";
    }

    descripcion(): string {
        return "300ml, 1 unidad";
    }

    imagen(): string {
        return "./";//Falta aclarar path
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 2200
    }
}