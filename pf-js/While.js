/**
 * Loops
 * Son estructuras de control
 * Que nos permiten repetir n cantidad de veces un bloque de codigo {}
 * 
 * ? Tenemos 3 grandes loops
 * ? For
 * ? While
 * ? Do While
 */

/**
 * WHILE
 * Es loop que se ejecuta mienstras una condicion sea verdadera
 * En cuento esta condicion se vuelva falsa se detiene
 * 
 * !IMPORTANTE
 * !Necesita un contador externo o una forma de parar
 * !No olvidar actaulizar el contador
 * ! Puedes generar un bucle infinito
 */
// 1. Contador
let counter = 0;

// 2. Iniciamos el bucle
while (counter <= 100){
    console.log(counter);
    // 3. Actualizamos el contador
    counter = counter + 1;
}

counter = 1;

/**
 * % Operador modulo
 * Regresa el residuo de una division
 * EJEMPLO:
 * 5 % 2 = 1
 * 6 % 2 = 0
 */

while (counter < 200){
    if (counter % 2 == 0){
        console.log(`El numero ${counter} es par`); 
    } else {
        console.log(`El numero ${counter} es impar`);
    }
    //Operador de incremento suma 1 a el valor de la variable
    counter++; 
}


/**
 * 
 * 
 */
