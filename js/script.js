/*ejercicio 1*/

document.write("<h3>Elementos de un Array</h3>");
const numbers = [1, 2, 3, 4, 5]
//acceder a los elementos de un array
document.write("el arreglo en su primera posición es "+numbers[1]+"<br>");
document.write("el arreglo en su segunda posición es "+numbers[2]+"<br>");

//usar elementos para acceder a un elemento de un array

document.write("<h3>usar elementos para acceder a un elemento de un array</h3>")

let index = 4;

document.write("la variable index corresponde a "+numbers[index]+"<br>");

//modificar los elementos de un array

document.write("<h3>modificar elementos de un array</h3>");

numbers[0] = 10;
numbers[2] = 30;

document.write("el array modificado es "+numbers+"<br>");

//longitud de un array

document.write("<h3>longitud de un array</h3>");

const fruta = ["manzana", "pera", "plátano", "fresa"]

document.write("El array de frutas es "+fruta+"<br>");
document.write("Esta es la longitud del array de frutas "+fruta.length+"<br>");

//tambien se puede cortar su longitud asignando un nuevo valor a la propiedad .length

document.write("<h3>cortar longitud</h3>");

fruta.length = 1;

document.write("solo aparece "+fruta+"<br>");
document.write("solo apareceran "+fruta.length+"<br>");

//metodos de arrays

document.write("<h1>metodos de arrays</h1>");

//push "nos permite añadir un elemento al final de un array"

document.write("<h3>push</h3>");

const frutas = ["plátano", "fresa"]

frutas.push("naranja")
document.write("el array completo es "+frutas+"<br>")

document.write("esta es la longitud del array "+frutas.length+"<br>") 

const newLength = frutas.push("piña")
document.write("longitud del array "+newLength+"<br>") 
document.write("este es el array completo "+frutas+"<br>")

//pop "elimina y devuelve el ultimo elemento de un array"
document.write("<h3>pop</h3>");

 const ultimaFruta = frutas.pop()

 document.write("elimina la ultima fruta del array "+frutas+"<br>")
 document.write("devuelve la misma"+ultimaFruta+"<br>")

 //shift "elimina y devuelve el primer elemento de un array (hace lo mismo que pop pero con el primero)"

 document.write("<h3>shift</h3>");

 const primeraFruta = frutas.pop()

 document.write("elimina la primer fruta del array "+frutas+"<br>");
 document.write("devuelve la misma "+primeraFruta+"<br>");

 //unshift "añade un elemento al principio de un array ( Es lo mismo que .push(), pero con el primer elemento en lugar del último:)"

 document.write("<h3>shift</h3>");

 frutas.unshift("manzana")

 document.write("se añadio una fruta al inicio del array:"+frutas+"<br>")


 //CONCATENAR ARRAYS, se concatena con concat

 document.write("<h2>CONCATENAR ARRAYS</h2>");

 const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2);

 document.write("se concateno "+allNumbers);



 //ejercicio practico

 document.write("<4>EJERCICIO PRACTICO</4>")

 function procesarPedido(pedido){
    const cliente = pedidos.shift();
    pedidos.unshift("bebida");
    pedidos.push(cliente);
    return pedidos
 }

 const pedidos=["pedro","cafe","huevos","pan"]
 document.write["el pedido es: "+procesarPedido(pedidos)+"<br>"]
