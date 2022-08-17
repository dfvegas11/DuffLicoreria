interface Clonar {
    color(estilo: string): void;
    bordeado(borde: string): void;
    tipoLetra(letra: string): void;
    setTarjeta(info: any): string;
    clonar(): Clonar;
}

export default Clonar;