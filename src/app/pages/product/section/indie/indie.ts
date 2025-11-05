import { Component } from '@angular/core';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-indie',
  imports: [CommonModule],
  templateUrl: './indie.html',
  styleUrl: './indie.css'
})
export class Indie {
  public infojuego: Juego[];
  constructor() {
    this.infojuego = [
      {
        id: 1,
        titulo: "dispatch",
        descripcion: "Dispatch es una comedia de oficina sobre superhéroes donde las decisiones importan. Gestiona un equipo de héroes inadaptados y decide quién enviar a las emergencias por la ciudad todo mientras equilibras la política de oficina, las relaciones personales y tu propia misión de...",
        precio: 14.99,
        img: "../assets/dispatch.webp",
        alt: "..."
      },
      {
        id: 2,
        titulo: "RUST",
        descripcion: "En Rust, el único propósito es sobrevivir. Todo lo que te rodea quiere liquidarte: la fauna de la isla, los demás habitantes, el entorno y otros supervivientes. Haz lo que sea para ver la luz de un nuevo día.",
        precio: 18.99,
        img: "../assets/rust.jpg",
        alt: "..."
      },
      {
        id: 3,
        titulo: "Megabonk",
        descripcion: "¡Arrasa con oleadas infinitas de enemigos y vuélvete absurdamente poderoso! Agarra loot, sube de nivel, desbloquea personajes y haz upgrades para crear builds únicas y locas mientras te enfrentas a hordas de criaturas.",
        precio: 5.79,
        img: "../assets/mega.jpg",
        alt: "..."
      },
      {
        id: 4,
        titulo: "BALL x PIT",
        descripcion: "BALL x PIT es un roguelite de supervivencia en el que hay que romper ladrillos, fusionar bolas y construir bases. Vence a enemigos con bolas que rebotan y peina el foso para ampliar tu hogar, generar recursos y reclutar a héroes.",
        precio: 7.99,
        img: "../assets/ball.jpg",
        alt: "..."
      }
    ]
  }
}
