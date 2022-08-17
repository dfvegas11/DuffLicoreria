import { CervImportada } from "../../ProductoAbstracto";

export default class Corona implements CervImportada{

    titulo(): string {
        return "Corona";
    }

    descripcion(): string {
        return "Cerveza sixpack coronita Corona 1260 ml";
    }

    imagen(): string {
        return "./";
    }

    disponibilidad(): boolean {
        return true;
    }

    precio(): number {
        return 16100;
    }
}