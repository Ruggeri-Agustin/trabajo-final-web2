/*
ng g i nombre/interfaz


interfaz: modelo de clases y objetos, donde se definen las propiedades (caracteristicas) y que nos permiten estructurarlas con sus tipos
*/

export interface Juego {
    id: number
    titulo: string
    descripcion: string
    precio: number
    img?: string
    alt?: string
}