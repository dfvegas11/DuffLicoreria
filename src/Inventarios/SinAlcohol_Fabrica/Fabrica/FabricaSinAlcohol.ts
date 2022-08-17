import { Agua, Cocacola, PonyMalta, RedBull, Tonica } from "../Productos";

export default class FabricaSinAlcohol {
    static getSinAlcohol(producto: string){
        if(!producto) return null;
        else if(producto == "agua") return new Agua();
        else if(producto == "cocacola") return new Cocacola();
        else if(producto == "ponymalta") return new PonyMalta();
        else if(producto == "redbull") return new RedBull();
        else if(producto == "tonica") return new Tonica();
    }
}