import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roguelike',
  imports: [CommonModule],
  templateUrl: './roguelike.html',
  styleUrl: './roguelike.css'
})
export class Roguelike {
  public infojuego: Juego[];
  constructor() {
    this.infojuego = [
      {
        id: 1,
        titulo: "Megabonk",
        descripcion: "¡Arrasa con oleadas infinitas de enemigos y vuélvete absurdamente poderoso! Agarra loot, sube de nivel, desbloquea personajes y haz upgrades para crear builds únicas y locas mientras te enfrentas a hordas de criaturas.",
        precio: 5.79,
        img: "../assets/mega.jpg",
        alt: "..."
      },
      {
        id: 2,
        titulo: "Hades II",
        descripcion: "Usa las artes oscuras para abrirte paso más allá del inframundo y enfréntate al Titán del Tiempo en esta cautivadora continuación del galardonado juego de mazmorras de tipo rogue-like.",
        precio: 14.99,
        img: "../assets/hades.jpg",
        alt: "..."
      },
      {
        id: 3,
        titulo: "CloverPit",
        descripcion: "Un juego «rogue-lite» con máquinas tragaperras de pesadilla. Apuesta tu vida en un simulador de deuda interminable.",
        precio: 5.79,
        img: "../assets/clover.jpg",
        alt: "..."
      },
      {
        id: 4,
        titulo: "The Binding of Isaac: Rebirth",
        descripcion: "When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.",
        precio: 14.99,
        img: "../assets/tboi.jpg",
        alt: "..."
      }
    ]
  }
}
