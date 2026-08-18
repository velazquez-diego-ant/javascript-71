/** 
 *  Hay 3 formas de declarar llevaes
 * !Existe una forma que ya no se recomienda su uso
 * Al proceso de crear una variable y darle un valor se le llama asignacion
 * 
 * Las variables que pueden ser reasignadas  pueden cambiar en un valor que 
 * tienen) se declaran
 * ? let nombreVariable = valor;
 * 
 * * El operador = se conoce como operador de asignacion  
 * Una vez creada una varibale podemos usarlo en otras variables del codigo utilizando 
 * su nombre, las variables al ser utilizadas no van entre ""
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar)
 * se declararn:
 * !const nombreVariable = valor; 
 * 
 * Nota:
 * Palabras reservadas : Son palabras que utiliza al lenguaje de programacion 
 * y si intentamos usarlas en otros lados pueden generar errores
 * 
*/

let nombre = "Diego"; /**TIPO STRING */
console.log(nombre);

const birthYear = 2004; /**TIPO NUMERICO */
console.log(birthYear);

/* REASIGNANDO UNA VARIABLE (CAMBIENDO EL VALOR QUE TIENE)
 Cuando reasignamos una varibale (una variable ya creada)
 ! Ya no es necesario poner let

*/

name = "Antonio"
console.log(name);

/**
 * birthYear = 1995
 * 
 */

/**
 * Concatenar:
 * Nos permite pegar el valor de una variable a un texto.
 */

console.log("Hola soy "+ nombre + " Y estoy en gen con "+ name + " naci en el " + birthYear)
