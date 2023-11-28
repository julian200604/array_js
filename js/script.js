/*ejercicio 1*/

document.write("<h3>Elementos de un Array</h3>");
const numbers = [1, 2, 3, 4, 5]
//acceder a los elementos de un array
document.write("el arreglo en su primera posición es "+numbers[1]+"<br>");
document.write("el arreglo en su segunda posición es "+numbers[2]+"<br>");

//usar elementos para acceder a un elemento de un array

let index = 4;

document.write("la variable index corresponde a "+numbers[index]+"<br>");

//modificar los elementos de un array

numbers[0] = 10
numbers[2] = 30

document.write("el array modificado es "+numbers+"<br>");

//longitud de un array

document.write("<h3>longitud de un array</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("El array de frutas es "+frutas+"<br>");
document.write("Esta es la longitud del array de frutas "+frutas.length+"<br>");

