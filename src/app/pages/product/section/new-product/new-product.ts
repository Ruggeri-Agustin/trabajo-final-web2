import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Juego } from '../../../../models/juego';
import { CommonModule } from '@angular/common';
/**
 * FormGroup: directiva de formularios que agrupa una serie de datos
 * FormControl: utilizada en conjunto con formGroup para tomar el valor de una propiedad individual en un formulario
 * ReactiveFormsModule: activa el uso de formularios reactivos -> se ejecutan mediante una accion y se relaciona HTML (interfaz grafica) con ts (componente logica)
 * Validators: pide o requiere que  un valor exista o sea valido como necesario
 */

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  /**
   * propiedades estrictamente requeridad -> validators.required
   * propiedades opcionales -> no lo necesitan
   */
  nuevoProducto = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')


  })
  /**
   * coleccionar productos de tipo Juego (respeta la estructura de la interfaz)
   * 
   */
  coleccionProductos: Juego[] = [];
  /**
   * propiedad privade para manejar informacion sensible
   */
  private contadorID = 1

  /**
   * @description metodo para la creacion de tarjetas segun formulario reactivo
   * "nuevoProducto"
   * condicional se ejecuta so el formulario es valido
   * agrear "nuevoProducto" a coleccionProductos
   */
  crearProducto() {
    if (this.nuevoProducto.valid) {
      const nuevoProducto: Juego = {
        id: this.contadorID++,
        //id es el unico valor que asignamos nosotros y no el usuario
        //el resto de propiedades toman el valor definido del formulario
        titulo: this.nuevoProducto.value.titulo!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!
      }
      //enviar un metodo "push" la constante "nuevoProducto"
      this.coleccionProductos.push(nuevoProducto)
      console.log("nueva tarjeta agregada: ", nuevoProducto)
      console.log("estado de la coleccion actual: ",this.coleccionProductos)
      alert("se creo la tarjeta con exito")

//reseteamos formulario ->
      this.nuevoProducto.reset()
    }
  }
}
