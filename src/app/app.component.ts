import { Component, Provider } from '@angular/core';
import { Producto } from './producto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Estas variables son públicas
  name = 'viveros-martinez';
  age = 40;
  imagen = 'https://source.unsplash.com/random';
  btnDisabled = true;

  persona = {
    nombre: 'Gabriel',
    edad: 39,
    avatar: 'https://source.unsplash.com/random'
  }


  // any[]
  // string[] number[] caracteres y números
  nombres: string[] = [ 'Leandro', 'Andrés', 'Wendy', 'Renata', 'Gabriel', 'Eduardo']
  nuevoNombre = '';

  productos: Producto[] = [ //asignado al Array de la interfaz Producto
    {
      nombre: 'Juguete',
      precio: 35,
      imagen: './assets/images/toy.jpg',
      categoria: 'Juguetes'
    },
    {
      nombre: 'Bicicleta',
      precio: 120,
      imagen: './assets/images/bike.jpg'
    },
    {
      nombre: 'Album',
      precio: 5,
      imagen: './assets/images/album.jpg'
    },
    {
      nombre: 'Libros',
      precio: 25,
      imagen: './assets/images/books.jpg'
    },
    {
      nombre: 'Gafas',
      precio: 45,
      imagen: './assets/images/glasses.jpg'
    },

  ];

  agregarNombre() {
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre = '';
  }

  btnActivar() {
    this.btnDisabled = !this.btnDisabled;
  }

  btnEdad() {
    this.persona.edad++;
  }

  onScroll(event: Event) {
    const elemento = event.target as HTMLElement;

    console.log(elemento.scrollTop);
  }

  cambiarNombre(event: Event) {
    const elemento = event.target as HTMLInputElement;
    this.persona.nombre = elemento.value;
    //console.log(elemento.value);
  }

  borrarNombre(index: number) {

    this.nombres.splice(index, 1);
  }
}
