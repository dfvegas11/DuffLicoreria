import FabricaCerveza from "../FabricaAbstracta/FabricaCervezas";
import { CervImportada, CervNacional } from "../ProductoAbstracto";
import { Costeña, Aguila, Poker, ClubColombia } from "../ProductosConcretos/Nacional";
import { Corona, Budweiser, Stella } from "../ProductosConcretos/Importada";

export default class FabricaBavaria implements FabricaCerveza {
    crearCImportada(cerveza: string): CervImportada {
        let cervezaImportada: CervImportada;
        if (cerveza == "corona") cervezaImportada = new Corona();
        else if (cerveza == "budweiser") cervezaImportada = new Budweiser();
        else if (cerveza == "stella") cervezaImportada = new Stella();
        else {throw new Error("Cerveza importada no encontrada");}
        
        return cervezaImportada;
    }

    crearCNacional(cerveza: string): CervNacional {
        let cervezaNacional: CervNacional;
        if (cerveza == "costeña") cervezaNacional = new Costeña();
        else if (cerveza == "aguila") cervezaNacional = new Aguila();
        else if (cerveza == "poker") cervezaNacional = new Poker();
        else if (cerveza == "clubColombia") cervezaNacional = new ClubColombia();
        else {throw new Error("Cerveza nacional no encontrada");}
        
        return cervezaNacional;
    }
}