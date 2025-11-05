import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-survival',
  imports: [CommonModule],
  templateUrl: './survival.html',
  styleUrl: './survival.css'
})
export class Survival {
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
        titulo: "PUBG: BATTLEGROUNDS",
        descripcion: "¡PUBG: BATTLEGROUNDS, el shooter con mucho que perder y todo que ganar que empezó el boom de los Battle Royale, es gratuito! Aterriza en mapas muy diversos, saquea armas y suministros únicos, y sobrevive en una zona menguante en la que cada turno podría ser el último.",
        precio: 0.00,
        img: "../assets/pub.jpg",
        alt: "..."
      },
      {
        id: 3,
        titulo: "Escape from Duckov 逃离鸭科夫",
        descripcion: "Escape from Duckov es un videojuego indie de supervivencia y rol PVE. Cuidado con todo tipo de enemigos, una vez derrotados, perderás el equipo que tienes. ¡Pero no importa, ¡ haz un buen trabajo de infraestructura y pronto puedes volver!",
        precio: 12.99,
        img: "../assets/duck.jpg",
        alt: "..."
      },
      {
        id: 4,
        titulo: "RUST",
        descripcion: "En Rust, el único propósito es sobrevivir. Todo lo que te rodea quiere liquidarte: la fauna de la isla, los demás habitantes, el entorno y otros supervivientes. Haz lo que sea para ver la luz de un nuevo día.",
        precio: 18.99,
        img: "../assets/rust.jpg",
        alt: "..."
      }
    ]
  }
}
