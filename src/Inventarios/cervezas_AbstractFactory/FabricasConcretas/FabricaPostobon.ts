import FabricaCerveza from "../FabricaAbstracta/FabricaCervezas";
import { CervImportada, CervNacional } from "../ProductoAbstracto";
import { Andina } from "../ProductosConcretos/Nacional";
import { Miller, Tecate, Heineken } from "../ProductosConcretos/Importada";

export default class FabricaPostobon implements FabricaCerveza {
    crearCImportada(cerveza: string): CervImportada {
        let cervezaImportada: CervImportada;
        if (cerveza == "miller") cervezaImportada = new Miller();
        else if (cerveza == "tecate") cervezaImportada = new Tecate();
        else if (cerveza == "heineken") cervezaImportada = new Heineken();
        else {throw new Error("Cerveza importada no encontrada");}
        
        return cervezaImportada;
    }

    crearCNacional(cerveza: string): CervNacional {
        let cervezaNacional: CervNacional;
        if (cerveza == "andina") cervezaNacional = new Andina();
        else {throw new Error("Cerveza nacional no encontrada");}
        
        return cervezaNacional;
    }
}