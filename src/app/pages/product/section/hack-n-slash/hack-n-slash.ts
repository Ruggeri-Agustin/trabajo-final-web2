import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hack-n-slash',
  imports: [CommonModule],
  templateUrl: './hack-n-slash.html',
  styleUrl: './hack-n-slash.css'
})
export class HackNSlash {
  public infojuego: Juego[];
  constructor() {
    this.infojuego = [
      {
        id: 1,
        titulo: "Warframe",
        descripcion: "Despierta como un guerrero imparable y lucha junto a tus amigos en este juego de acción gratuito en línea y basado en historias.",
        precio: 0.00,
        img: "../assets/warframe.jpg",
        alt: "..."
      },
      {
        id: 2,
        titulo: "Megabonk",
        descripcion: "¡Arrasa con oleadas infinitas de enemigos y vuélvete absurdamente poderoso! Agarra loot, sube de nivel, desbloquea personajes y haz upgrades para crear builds únicas y locas mientras te enfrentas a hordas de criaturas.",
        precio: 5.79,
        img: "../assets/mega.jpg",
        alt: "..."
      },
      {
        id: 3,
        titulo: "NARAKA: BLADEPOINT",
        descripcion: "NARAKA: BLADEPOINT es una experiencia de combate y acción para hasta 60 jugadores con enfrentamientos cuerpo a cuerpo basados en las artes marciales, movimientos que desafían la gravedad, héroes personalizables dotados de habilidades épicas y un gran arsenal de armas",
        precio: 0.00,
        img: "../assets/nara.jpg",
        alt: "..."
      },
      {
        id: 4,
        titulo: "Path of Exile",
        descripcion: "Eres un exiliado. Tendrás que sobrevivir en el oscuro continente de Wraeclast mientras luchas para conseguir el poder que te permitirá vengarte de quienes te traicionaron. Path of Exile es un RPG de acción ambientado en un mundo de fantasía oscura. Es totalmente gratis y nunca será pay-to-win.",
        precio: 0.00,
        img: "../assets/pat.jpg",
        alt: "..."
      }
    ]
  }
}
