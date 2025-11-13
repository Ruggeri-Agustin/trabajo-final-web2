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
      {
        id: 6,
        titulo: "Warframe",
        descripcion: "Despierta como un guerrero imparable y lucha junto a tus amigos en este juego de acción gratuito en línea y basado en historias.",
        precio: 0.00,
        img: "../assets/warframe.jpg",
        alt: ""
      },
      {
        id: 7,
        titulo: "Path of Exile",
        descripcion: "Eres un exiliado. Tendrás que sobrevivir en el oscuro continente de Wraeclast mientras luchas para conseguir el poder que te permitirá vengarte de quienes te traicionaron. Path of Exile es un RPG de acción ambientado en un mundo de fantasía oscura. Es totalmente gratis y nunca será pay-to-win.",
        precio: 0.00,
        img: "../assets/pat.jpg",
        alt: ""
      },
      {
        id: 8,
        titulo: "Dead by Daylight",
        descripcion: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados y asesinados.",
        precio: 14.99,
        img: "../assets/dbd.jpg",
        alt: ""
      },
      {
        id: 9,
        titulo: "Resident Evil 4 Remake",
        descripcion: "Sobrevivir es solo el principio. Con una mecánica de juego modernizada, una historia reimaginada y unos gráficos espectacularmente detallados, Resident Evil 4 supone el renacimiento de un gigante del mundo de los videojuegos.",
        precio: 29.99,
        img: "../assets/re4.jpg",
        alt: ""
      },
      {
        id: 10,
        titulo: "Hades II",
        descripcion: "Usa las artes oscuras para abrirte paso más allá del inframundo y enfréntate al Titán del Tiempo en esta cautivadora continuación del galardonado juego de mazmorras de tipo rogue-like.",
        precio: 14.99,
        img: "../assets/hades.jpg",
        alt: ""
      },
      {
        id: 11,
        titulo: "Naraka: Bladepoint",
        descripcion: "NARAKA: BLADEPOINT es una experiencia de combate y acción para hasta 60 jugadores con enfrentamientos cuerpo a cuerpo basados en las artes marciales, movimientos que desafían la gravedad, héroes personalizables dotados de habilidades épicas y un gran arsenal de armas",
        precio: 0.00,
        img: "../assets/nara.jpg",
        alt: ""
      },
      {
        id: 12,
        titulo: "The Binding of Isaac: Rebirth",
        descripcion: "When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.",
        precio: 14.99,
        img: "../assets/tboi.jpg",
        alt: ""
      },
      {
        id: 13,
        titulo: "EA SPORTS FC™ 26",
        descripcion: "El Club es tuyo en EA SPORTS FC™ 26. Juega a tu manera con una experiencia de juego renovada impulsada por los comentarios de la comunidad, Desafíos en vivo de Mánager que traen historias frescas a la nueva temporada y Arquetipos inspirados en los Grandes del deporte.",
        precio: 69.99,
        img: "../assets/fc26.jpg",
        alt: ""
      },
      {
        id: 14,
        titulo: "NBA 2K26",
        descripcion: "Dirige una franquicia de la NBA como general manager en Mi NBA. Elige entre los 30 equipos, vive 30 historias únicas de Mi GM inspiradas en el mundo real y persigue el objetivo final: ganar un campeonato. Influye en el futuro del deporte y deja una huella indeleble en la liga.",
        precio: 29.99,
        img: "../assets/nba.jpg",
        alt: ""
      },
      {
        id: 15,
        titulo: "Megabonk",
        descripcion: "¡Arrasa con oleadas infinitas de enemigos y vuélvete absurdamente poderoso! Agarra loot, sube de nivel, desbloquea personajes y haz upgrades para crear builds únicas y locas mientras te enfrentas a hordas de criaturas.",
        precio: 5.79,
        img: "../assets/mega.jpg",
        alt: ""
      },
      {
        id: 16,
        titulo: "R.E.P.O",
        descripcion: "An online co-op horror game with up to 6 players. Locate valuable, fully physics-based objects and handle them with care as you retrieve and extract to satisfy your creator's desires.",
        precio: 5.79,
        img: "../assets/repo.jpg",
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


  verMas(producto: any) {
    this.productoSeleccionado = producto
  }
}