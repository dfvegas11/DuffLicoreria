import { CervNacional } from "../../ProductoAbstracto";

export default class ClubColombia implements CervNacional{

    titulo(): string {
        return "Club Colombia";
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
        return 16200;
    }
}