import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { Juego } from '../../../../models/juego';
/**
 * FormGroup: directiva de formularios que agrupa una serie de datos
 * FormControl: utilizada en conjunto con formGroup para tomar el valor de una propiedad individual en un formulario
 * ReactiveFormsModule: activa el uso de formularios reactivos -> se ejecutan mediante una accion y se relaciona HTML (interfaz grafica) con ts (componente logica)
 * Validators: pide o requiere que  un valor exista o sea valido como necesario
 */

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
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

crearProducto(){
}
}
