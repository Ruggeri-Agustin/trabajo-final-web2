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
        titulo: "arc raiders",
        descripcion: "ARC Raiders es un nuevo juego multijugador de aventura y extracción ambientado en un mortífero planeta Tierra del futuro devastado por una misteriosa amenaza mecánica llamada ARC.",
        precio: 39.99,
        img: "../assets/arcRaiders.jpg",
        alt: "..."
      },
      {
        id: 2,
        titulo: "counter strike 2",
        descripcion: "Durante las dos últimas décadas, Counter Strike ha proporcionado una experiencia competitiva de primer nivel para los millones de jugadores de todo el mundo que contribuyeron a darle forma. Ahora el próximo capítulo en la historia de CS está a punto de comenzar. Hablamos de Counter‑Strike 2.",
        precio: 0.00,
        img: "../assets/cs2.jpg",
        alt: "..."
      },
      {
        id: 3,
        titulo: "battlefield 6",
        descripcion: "La experiencia bélica definitiva. En una guerra de tanques, cazas y gigantescos arsenales de combate, el arma más mortífera es tu patrulla.",
        precio: 69.99,
        img: "../assets/bt6.avif",
        alt: "..."
      },
      {
        id: 4,
      titulo: "dispatch",
      descripcion: "Dispatch es una comedia de oficina sobre superhéroes donde las decisiones importan. Gestiona un equipo de héroes inadaptados y decide quién enviar a las emergencias por la ciudad todo mientras equilibras la política de oficina, las relaciones personales y tu propia misión de...",
      precio: 14.99,
      img: "../assets/dispatch.webp",
      alt: "..."
      }
    ]
  }
}
