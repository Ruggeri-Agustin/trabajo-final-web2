import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-simulator',
  imports: [CommonModule],
  templateUrl: './simulator.html',
  styleUrl: './simulator.css'
})
export class Simulator {
  public infojuego: Juego[];
  constructor() {
    this.infojuego = [
      {
        id: 1,
        titulo: "Europa Universalis V",
        descripcion: "Recurre a la guerra, el comercio o la diplomacia para satisfacer tus mayores ambiciones y dominar cinco siglos de historia con la entrega más reciente de Europa Universalis, el juego insignia de gran estrategia histórica de Paradox Interactive.",
        precio: 35.99,
        img: "../assets/eur.jpg",
        alt: "..."
      },
      {
        id: 2,
        titulo: "EA SPORTS FC™ 26",
        descripcion: "El Club es tuyo en EA SPORTS FC™ 26. Juega a tu manera con una experiencia de juego renovada impulsada por los comentarios de la comunidad, Desafíos en vivo de Mánager que traen historias frescas a la nueva temporada y Arquetipos inspirados en los Grandes del deporte.",
        precio: 69.99,
        img: "../assets/fc26.jpg",
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
        titulo: "Crusader Kings III",
        descripcion: "Ama, lucha, planea y reclama la grandeza. Determina el legado de tu casa nobiliaria en la gran estrategia en expansión de Crusader Kings III. La muerte solo es el comienzo mientras lideras el linaje de tu dinastía en esta completa simulación realista de la Edad Media.",
        precio: 29.99,
        img: "../assets/cru.jpg",
        alt: "..."
      }
    ]
  }
}
