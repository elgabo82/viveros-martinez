import { NumberSymbol } from "@angular/common";

const username: string = 'gabriel';

const suma = (a: number, b: number) => {
  return a+b;
}

suma(1, 2);

class Persona {
  // edad: number;
  // apellido: string;
  // nombre: string;

  //constructor(edad: number, apellido: string, nombre: string) {
  constructor(public edad: number, public apellido: string, public nombre: string) { // Esto es igual a todo lo que está con comentario
    // this.edad = edad;
    // this.apellido = apellido;
    // this.nombre = nombre;
  }

}

const gabriel = new Persona(39, 'Morejón', 'Gabriel');
//gabriel.edad;




