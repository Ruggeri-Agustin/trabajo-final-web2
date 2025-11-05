import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-terror',
  imports: [CommonModule],
  templateUrl: './terror.html',
  styleUrl: './terror.css'
})
export class Terror {
  public infojuego: Juego[];
  constructor() {
    this.infojuego = [
      {
        id: 1,
        titulo: "R.E.P.O",
        descripcion: "An online co-op horror game with up to 6 players. Locate valuable, fully physics-based objects and handle them with care as you retrieve and extract to satisfy your creator's desires.",
        precio: 5.79,
        img: "../assets/repo.jpg",
        alt: "..."
      },
      {
        id: 2,
        titulo: "Dead by Daylight",
        descripcion: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados y asesinados.",
        precio: 14.99,
        img: "../assets/dbd.jpg",
        alt: "..."
      },
      {
        id: 3,
        titulo: "Dying Light: The Beast",
        descripcion: "Eres Kyle Crane y buscas vengarte tras haber sufrido años de experimentos. Descubre un mundo abierto que mezcla la acción, la supervivencia y el terror mientras buscas a quien te convirtió en mitad bestia, mitad humano.",
        precio: 44.99,
        img: "../assets/dlb.jpg",
        alt: "..."
      },
      {
        id: 4,
        titulo: "Resident Evil 4",
        descripcion: "Sobrevivir es solo el principio. Con una mecánica de juego modernizada, una historia reimaginada y unos gráficos espectacularmente detallados, Resident Evil 4 supone el renacimiento de un gigante del mundo de los videojuegos.",
        precio: 29.99,
        img: "../assets/re4.jpg",
        alt: "..."
      }
    ]
  }
}
