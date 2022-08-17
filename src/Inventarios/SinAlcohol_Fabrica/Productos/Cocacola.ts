import SinAlcohol from "../Interface/SinAlcohol";

export default class Cocacola implements SinAlcohol{
    titulo(): string {
        return "Coca-Cola botella 1.5L";
    }

    descripcion(): string {
        return "1.5L, 1 unidad";
    }

    imagen(): string {
        return "./";//Falta aclarar path
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 4300
    }
}