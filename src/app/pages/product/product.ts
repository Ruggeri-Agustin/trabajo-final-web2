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
    ]
  }
}