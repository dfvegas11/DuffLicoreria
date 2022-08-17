import SinAlcohol from "../Interface/SinAlcohol";

export default class Agua implements SinAlcohol{
    titulo(): string {
        return "Agua Zalva sin Gas 600 ml X6";
    }

    descripcion(): string {
        return "6 unidades";
    }

    imagen(): string {
        return "./";//Falta aclarar path
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 9000
    }
}