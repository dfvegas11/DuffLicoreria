import { CervImportada } from "../../ProductoAbstracto";

export default class Miller implements CervImportada{

    titulo(): string {
        return "Miller";
    }

    descripcion(): string {
        return "Sixpack cerveza lite Miller 1980 Mililitro";
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