/**
 * Condicionales
 * Serie de condicones para que algo suceda
 * 
 * En programacion para el amnejo de estas condiociones 
 * tenemos:
 * 
 * ! El bloque if-else
 * ? Bloque if pregunta por una condicion en caso de que esta condcion sea
 * ?verdadera ejecuta un bloque de codigo, en de falso no se ejecuta nada
 * ?else maneja la ejecucuion de codigo en caso negativo
 *
 * Lo que se coloca dentro del if, debe ser algo que genere
 * * un valor True o False (Tipo de dato boolenan)
 * 
*/

/**
 * Codigo que obtenga la edad del user
 * 2. Pedir la fecha de nacimiento
 * 3. tomar el año actual para calcular su edad 2026
 
 Convertir de texto a nuemro
 
 * !Importante
 * Si se trata de convertir algo que no es un numero
 * como resultado obtenemos Nan (not a numer)
 */

const birthYear = prompt("Ingrese su año de nacimiento");
const currentYear = 2026-birthYear;
const age = Number(currentYear);


/**
 * 
 * Operadores Logicos:
 * Sirven para ahcer operaciones cuto resultado es verdadero o falso
 * 
 * Mayor que: >
 * 2 > 1 = True
 * 1 > 2 = False
 * 0 > 0 = False
 * 
 * 
 * Menor que: <
 * 2 < 1 = False
 * 3 < 5 = True
 * 2 < 2 = False
 * 
 * 
 * Mayor o igual que: >=
 * 2 >= 2 = True
 * 2 >= 1 = True
 * 2 >= 3 = False
 * 
 * 
 * Menor o igual que: <=
 * 4 <= 4 = True
 * 4 <= 5 = True
 * 7 <= 5 = False
 * 
 * 
 * Igual a: ==
 * 2 == 2 = True
 * 3 == 1 = False
 * 
 * 
 * Diferente de: !=
 * 5 != 4 = True
 * 5 != 5 = False
 * 99 != 100 = True
 * 
 * Negacion: !
 * !True = False
 * !False = True
 * 
 */

/**Dentro de los parentesis va la condicion que se va a evaluar
 * Dentro de las llaves va el codigo que se va a ejecutar en caso
 * de que la condicion sea verdadera
 * 
 * ? else if 
 * 
 * Nos permite evaluar mas de una condicion
 * va asociodo a un if
 * 
 * AND && Es un operador que devuelve
 * ?Verdadero solo si ambos lados de la expresion son verdaderos
 * ? Si un lado es falso todo el resultado se vueleve falso
 * Verdadero && Verdadero = Verdadero
 * Verdadero && Falso = Falso
 * Falso && Verdadero = Falso
 * Falso && Falso = Falso
 * 
 * 
 * OR || Es un operador que devuelve
 * ?Falso si mabos lados de la expresion son falso
 * ? Si un lado de la expresion es verdadero devuelve verdadero
 * Verdadero || Verdadero = Verdadero
 * Verdadero || Falso = Verdadero
 * Falso || Verdadero = Verdadero
 * Falso || Falso = Falso
 * 
 * 
    */
if (age >= 18) {
    alert("Eres mayor de edad");
} else if(age >= 6) {
    alert("Felicidadees entraste ala primaria");
}else if (age >= 1) {
    alert("Felicidades sigues en el kinder");
}
else {
    alert("Estas muy chiquito para entrar ala escuela");
}