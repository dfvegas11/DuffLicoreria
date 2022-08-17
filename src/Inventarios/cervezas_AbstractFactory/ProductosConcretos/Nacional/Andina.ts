import { CervNacional } from "../../ProductoAbstracto";

export default class Andina implements CervNacional{

    titulo(): string {
        return "Andina";
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
        return 12000;
    }
}