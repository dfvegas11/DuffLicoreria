import { CervNacional } from "../../ProductoAbstracto";

export default class Aguila implements CervNacional{

    titulo(): string {
        return "Aguila";
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
        return 14400;
    }
}