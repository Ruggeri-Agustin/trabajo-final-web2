import { Component } from '@angular/core';
import { Juego } from '../../models/juego';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  /*
  propiedes en angular -> variables
  propiedad publica -> libre accseso a su contenido
  propiedad privada -> contenido restringido
  */
  public infojuego: Juego[];
  constructor() {
    this.infojuego = [
      {
        id: 1,
        titulo: "counter strike 2",
        descripcion: "Durante las dos últimas décadas, Counter Strike ha proporcionado una experiencia competitiva de primer nivel para los millones de jugadores de todo el mundo que contribuyeron a darle forma. Ahora el próximo capítulo en la historia de CS está a punto de comenzar. Hablamos de Counter‑Strike 2.",
        precio: 0.00,
        img: "../assets/cs2.jpg",
        alt: "..."
      },
      {
        id: 2,
        titulo: "Dota 2",
        descripcion: "Cada día, millones de jugadores de todo el mundo entran en batalla como uno de los más de cien héroes de Dota. Y no importa si es su décima hora de juego o la milésima, siempre hay algo nuevo que descubrir.",
        precio: 0.00,
        img: "../assets/header.jpg",
        alt: "..."
      },
      {
        id: 3,
        titulo: "battlefield 6",
        descripcion: "La experiencia bélica definitiva. En una guerra de tanques, cazas y gigantescos arsenales de combate, el arma más mortífera es tu patrulla.",
        precio: 69.99,
        img: "../assets/bt6.jpg",
        alt: "..."
      },
      {
         id: 4,
        titulo: "PUBG: BATTLEGROUNDS",
        descripcion: "¡PUBG: BATTLEGROUNDS, el shooter con mucho que perder y todo que ganar que empezó el boom de los Battle Royale, es gratuito! Aterriza en mapas muy diversos, saquea armas y suministros únicos, y sobrevive en una zona menguante en la que cada turno podría ser el último.",
        precio: 0.00,
        img: "../assets/pub.jpg",
        alt: "..." 
      },
      {
        id: 5,
        titulo: "RUST",
        descripcion: "En Rust, el único propósito es sobrevivir. Todo lo que te rodea quiere liquidarte: la fauna de la isla, los demás habitantes, el entorno y otros supervivientes. Haz lo que sea para ver la luz de un nuevo día.",
        precio: 18.99,
        img: "../assets/rust.jpg",
        alt: "..."
      },
    ]
  }

  //variable para obtener los datos de un producto/tarjete selecionada
  //any-> NO va a tener reestricciones y admite cualquier tipo
  productoSeleccionado: any = null
  /**
   * @descripcion metodo para ver mas informacion de un producto.
   * recibe como parametro un producto de tipo "any" y lo asigna a la variable "productoSeleccionado"
   */
  
  
  verMas(producto: any){
    this.productoSeleccionado = producto
  }
}