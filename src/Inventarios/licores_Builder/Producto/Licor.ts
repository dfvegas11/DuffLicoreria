export default class Licor {
    titulo: string;
    descripcion: string;
    imagen: string;
    disponibilidad: boolean;
    precio: number;

    setTitulo(titulo: string): void{
        this.titulo = titulo;
    }

    setDescripcion(descripcion: string): void{
        this.descripcion = descripcion;
    }

    setImagen(imagen: string): void{
        this.imagen = imagen;
    }

    setDisponibilidad(disponibilidad: boolean): void{
        this.disponibilidad = disponibilidad;
    }

    setPrecio(precio: number): void{
        this.precio = precio;
    }
}