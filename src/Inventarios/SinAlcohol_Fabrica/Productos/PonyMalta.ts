import SinAlcohol from "../Interface/SinAlcohol";

export default class PonyMalta implements SinAlcohol{
    titulo(): string {
        return "Pony Malta Pet 1.5 L";
    }

    descripcion(): string {
        return "1.5L 1 unidad";
    }

    imagen(): string {
        return "./";//Falta aclarar path
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 3700
    }
}