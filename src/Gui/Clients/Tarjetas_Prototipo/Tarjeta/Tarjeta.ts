import Clonar from "../Prototype/Clonar";

export default class Tarjeta implements Clonar{
    
    estilo: string;
    borde: string;
    letra: string;
    
    color(estilo: string): void {
        this.estilo = estilo;
    }

    bordeado(borde: string): void {
        this.borde = borde;
    }

    tipoLetra(letra: string): void {
        this.letra = letra;
    }

    setTarjeta(info: any): string {
        let text: string = `
            <div id="card-${info.number}" style="margin: 30px 50px;
                width: 250px;
                height: 300px;
              color: ${this.estilo};
              padding: 20px; 
              border: 2px solid rgb(26, 25, 25); 
              border-radius: ${this.borde}; 
              font-family: ${this.letra};">
                <img src="${info.imagen}">
                <h2>${info.titulo}</h2>
                <p>${info.descripcion}</p>
                <h3>${info.precio}</h3>
                <br>
                <button id="button-${info.number}" name="${info.titulo}--${info.descripcion}--${info.precio}">Añadir</button>
            </div>
        `
        return text;
    }

    clonar(): Clonar {
        let nuevaTarjeta: Clonar = new Tarjeta();
        nuevaTarjeta.color(this.estilo);
        nuevaTarjeta.bordeado(this.borde);
        nuevaTarjeta.tipoLetra(this.letra);
        return nuevaTarjeta;
    }
}