import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e-sport',
  imports: [CommonModule],
  templateUrl: './e-sport.html',
  styleUrl: './e-sport.css'
})
export class ESport {
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
        titulo: "EA SPORTS FC™ 26",
        descripcion: "El Club es tuyo en EA SPORTS FC™ 26. Juega a tu manera con una experiencia de juego renovada impulsada por los comentarios de la comunidad, Desafíos en vivo de Mánager que traen historias frescas a la nueva temporada y Arquetipos inspirados en los Grandes del deporte.",
        precio: 69.99,
        img: "../assets/fc26.jpg",
        alt: "..."
      },
      {
        id: 4,
        titulo: "NBA 2K26",
        descripcion: "Dirige una franquicia de la NBA como general manager en Mi NBA. Elige entre los 30 equipos, vive 30 historias únicas de Mi GM inspiradas en el mundo real y persigue el objetivo final: ganar un campeonato. Influye en el futuro del deporte y deja una huella indeleble en la liga.",
        precio: 29.99,
        img: "../assets/nba.jpg",
        alt: "..."
      }
    ]
  }
}
