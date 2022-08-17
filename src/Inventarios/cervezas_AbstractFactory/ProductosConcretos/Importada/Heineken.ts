import { CervImportada } from "../../ProductoAbstracto";

export default class Heineken implements CervImportada{

    titulo(): string {
        return "Heineken";
    }

    descripcion(): string {
        return "Cerveza sixpack Heineken 1614 ml";
    }

    imagen(): string {
        return "./";
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 12600;
    }
}