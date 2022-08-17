import { CervNacional } from "../../ProductoAbstracto";

export default class Costeña implements CervNacional{

    titulo(): string {
        return "Costeña";
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