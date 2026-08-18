/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor
 * que ingreso el usuario
 * 1.2 Usar el valor inmediatamente
 * 
 * !importante
 * 1.No se recomienda su uso en aplicaciones en produccion
 * 2.Bloquea el codigo, esto quiere decir que el codigo que este debajo
 * de donde escribimos el uso del prompt no se va a ejecutar, hata que el usurio ingrese algo.
 * 3. No se puede personalizar
 * 4.Todo lo que se ingresa mediante el promt siempre es String
 */

//const edad = prompt("Ingresa tu edad",15);
//console.log(edad);

/**
 * agregar una nueva variable con prompt para obtener un nombre
 * 
 */
//const nombre = prompt("Ingresa tu nombre");
//console.log(nombre);
//console.log("Hola mi nombre es : "+ nombre + " y tengo "+ edad + " años en el 2026");

/**
 * 1. Pedir un prompt para obtener una serie o pelicula favoritos
 * 2. Un prompt para obtener un personaje de esa serie, el favorito
 * 3. un prompt para obtener porque es el favorito
 * En la serie x sale el personaje x y es mi favorito por x 
*/
const serieFavorita = prompt("¿Cuál es tu serie favorita?");
const personajeFavorito = prompt("¿Cuál es tu personaje favorito de esa serie?");
const porqueEsFavorito = prompt("¿Por qué es tu personaje favorito?");

console.log("En la serie " + serieFavorita + " sale el personaje " + personajeFavorito + " y es mi favorito por " + "porque es mi favorito");
