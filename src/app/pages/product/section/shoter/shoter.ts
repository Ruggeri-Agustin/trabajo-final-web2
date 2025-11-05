import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoter',
  imports: [CommonModule],
  templateUrl: './shoter.html',
  styleUrl: './shoter.css'
})
export class Shoter {
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
        titulo: "arc raiders",
        descripcion: "ARC Raiders es un nuevo juego multijugador de aventura y extracción ambientado en un mortífero planeta Tierra del futuro devastado por una misteriosa amenaza mecánica llamada ARC.",
        precio: 39.99,
        img: "../assets/arcRaiders.jpg",
        alt: "..."
      },
      {
       id: 3,
        titulo: "PUBG: BATTLEGROUNDS",
        descripcion: "¡PUBG: BATTLEGROUNDS, el shooter con mucho que perder y todo que ganar que empezó el boom de los Battle Royale, es gratuito! Aterriza en mapas muy diversos, saquea armas y suministros únicos, y sobrevive en una zona menguante en la que cada turno podría ser el último.",
        precio: 0.00,
        img: "../assets/pub.jpg",
        alt: "..." 
      },
      {
        id: 4,
        titulo: "battlefield 6",
        descripcion: "La experiencia bélica definitiva. En una guerra de tanques, cazas y gigantescos arsenales de combate, el arma más mortífera es tu patrulla.",
        precio: 69.99,
        img: "../assets/bt6.jpg",
        alt: "..."
      }
    ]
}
}
