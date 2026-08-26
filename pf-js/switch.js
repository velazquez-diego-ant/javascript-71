/**
 * SWITCH
 * 
 * es una estructura de control condicional pero a diferencia de IF  no se basa en valores
 * de VERDAD o de FALSO si no se basa en opciones 
 * ? Nos permite tener multiples opciones
 * ? y con base en la opcion seleccionada ehecuta un bloque de codigo
 * ? Tiene una respuesta por default, por si la opcion ingresada no esta en la lista
 * 
 * ? Se divide en casos
 * ? Cada caso lleva su bloque de codigo y debe de llevar al finalizar la palabra break.
 * 
 * 
 * Nota:
 * 
 * !Todo: Expresiones (expressions) : Es todo aquello que genera un valor
 * *EJEMPLO : una suma, usar una variable , usar una funcion 
 * *texto, numero
 * 
 * !Todo: Decalaraciones (statements): No genera valor y por lo general son estructuras de control o bucles
 * *EJEMPLO: if, for, while, switch
 * 
 * 
 */
//let month = "Noviembre"

//switch(month){
//    case "Enero":
//       alert("El mes de Enero es el primer mes del año");
//        break;
//    case "Febrero":
//        alert(`El mes de ${month} es el segundo mes del año`)
//        " El mes "+ month + " es el segundo mes del año";
//        break;
//    case "Marzo":
//        alert(`El mes de ${month} es el tercer mes del año`)
//        break;
//    case "Abril":
//    case "Mayo":
//        console.log("Abril y Mayo");
//        break;
//    default:
//        alert("El mes ingresado no es valido");
// }

/**
 * 1. Crear un prompt para pedirle al usuario un pais
 * 2. crear un switch con una lista de 5 paises
 * 3. Dado el pais ingresado por el usuario, devolver la capital de dicho pais
 */

let country = prompt(`
    1. Mexico
    2. Colombia
    3. Peru
    4. Chile
    5. Argentina
    `
);

switch(country){
    case "Mexico":
        alert(`La capital de ${country} es Ciudad de Mexico`);
        break;
    case "Colombia":
        alert(`La capital de ${country} es Bogota`);
        break;
    case "Peru":
        alert(`La capital de ${country} es Lima`);
    case "Chile":
        alert(`La capital de ${country} es Santiago`);
        break;
    case "Argentina":
        alert(`La capital de ${country} es Buenos Aires`);
        break;
    default:
        alert("El pais ingresado no es valido");
}