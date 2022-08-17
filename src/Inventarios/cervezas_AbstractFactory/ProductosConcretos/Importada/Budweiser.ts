import { CervImportada } from "../../ProductoAbstracto";

export default class Budweiser implements CervImportada{

    titulo(): string {
        return "Budweiser";
    }

    descripcion(): string {
        return "Cerveza lata 6 und Budweiser 269 ml";
    }

    imagen(): string {
        return "./";
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 12050;
    }
}