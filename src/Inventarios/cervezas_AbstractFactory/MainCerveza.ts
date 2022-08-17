import { FabricaBavaria, FabricaPostobon } from "./FabricasConcretas";

export default class MainCerveza {
    static printCervezasNacionales(): any{
        const nacionalBavaria = new FabricaBavaria();
        const nacionalPostobon = new FabricaPostobon();

        const cervezasNacionales: any = [];
        cervezasNacionales.push(nacionalBavaria.crearCNacional("costeña"));
        cervezasNacionales.push(nacionalBavaria.crearCNacional("aguila"));
        cervezasNacionales.push(nacionalBavaria.crearCNacional("poker"));
        cervezasNacionales.push(nacionalBavaria.crearCNacional("clubColombia"));

        cervezasNacionales.push(nacionalPostobon.crearCNacional("andina"));

        const info = cervezasNacionales.map((element: any, index: number) => {
            return {
                titulo: element.titulo(),
                descripcion: element.descripcion(),
                imagen: element.imagen(),
                precio: element.precio(),
                disponibilidad: element.disponibilidad()
            }
        })
        return info;
    }

    static printCervezasImportadas(): any{
        const importadaBavaria = new FabricaBavaria();
        const importadaPostobon = new FabricaPostobon();

        const cervezasImportadas: any = [];
        cervezasImportadas.push(importadaBavaria.crearCImportada("corona"));
        cervezasImportadas.push(importadaBavaria.crearCImportada("budweiser"));
        cervezasImportadas.push(importadaBavaria.crearCImportada("stella"));

        cervezasImportadas.push(importadaPostobon.crearCImportada("miller"));
        cervezasImportadas.push(importadaPostobon.crearCImportada("tecate"));
        cervezasImportadas.push(importadaPostobon.crearCImportada("heineken"));

        const info = cervezasImportadas.map((element: any, index: number) => {
            return {
                titulo: element.titulo(),
                descripcion: element.descripcion(),
                imagen: element.imagen(),
                precio: element.precio(),
                disponibilidad: element.disponibilidad()
            }
        })
        return info;
    }
}