import { CervImportada, CervNacional } from "../ProductoAbstracto";

interface FabricaCerveza {
    crearCNacional(cerveza: string): CervNacional;
    crearCImportada(cerveza: string): CervImportada;
}

export default FabricaCerveza;