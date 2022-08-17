import SinAlcohol from "./Interface/SinAlcohol"
import FabricaSinAlcohol from "./Fabrica/FabricaSinAlcohol"

const mainSinAlcohol = (): any => {
    let productos: any = []
    let agua: SinAlcohol = FabricaSinAlcohol.getSinAlcohol("agua");
    let cocacola: SinAlcohol = FabricaSinAlcohol.getSinAlcohol("cocacola");
    let ponymalta: SinAlcohol = FabricaSinAlcohol.getSinAlcohol("ponymalta");
    let redbull: SinAlcohol = FabricaSinAlcohol.getSinAlcohol("redbull");
    let tonica: SinAlcohol = FabricaSinAlcohol.getSinAlcohol("tonica");

    productos.push(...[agua, cocacola, ponymalta, redbull, tonica]);    

    let infoProductos: any = productos.map((element: any, index: number) => {
        return {
            number: index,
            titulo: element.titulo(),
            descripcion: element.descripcion(),
            imagen: element.imagen(),
            precio: element.precio(),
            disponibilidad: element.disponibilidad()
        }
    })
    
    return infoProductos;
}

export default mainSinAlcohol;