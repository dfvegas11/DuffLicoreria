import { CervImportada } from "../../ProductoAbstracto";

export default class Stella implements CervImportada{

    titulo(): string {
        return "Stella Artois";
    }

    descripcion(): string {
        return "Cerveza Belgica sixpack Stella Artois 1980 ml";
    }

    imagen(): string {
        return "./";
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 25100;
    }
}