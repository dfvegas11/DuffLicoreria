import { CervNacional } from "../../ProductoAbstracto";

export default class Poker implements CervNacional{

    titulo(): string {
        return "Poker";
    }

    descripcion(): string {
        return "6 pack unidades";
    }

    imagen(): string {
        return "./";
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 15000;
    }
}