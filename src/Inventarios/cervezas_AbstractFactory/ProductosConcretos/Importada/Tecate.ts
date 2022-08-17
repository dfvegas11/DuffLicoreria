import { CervImportada } from "../../ProductoAbstracto";

export default class Tecate implements CervImportada{

    titulo(): string {
        return "Tecate";
    }

    descripcion(): string {
        return "Sixpack cerveza lata Tecate 1980 ml";
    }

    imagen(): string {
        return "./";
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 12200;
    }
}