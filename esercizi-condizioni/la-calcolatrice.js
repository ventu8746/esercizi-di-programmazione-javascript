/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var intNum1 = 7;                   //leggenda (medianum,somma,sottrazione,moltiplicazione,divisione,modulo,potenza)
var intNum2 = 5;
var string = "medianum";
var stringLe =string.length;

switch (stringLe){
  case 5:console.log(`ìl risultato della somma è ${intNum1+intNum2}`);
  break;
  case 11:console.log(`ìl risultato della sottrazione è ${intNum1-intNum2}`);
  break;
  case 15:console.log(`ìl risultato della moltiplicazione è ${intNum1*intNum2}`);
  break;
  case 9:console.log(`ìl risultato della divisione è ${intNum1/intNum2}`);
  break;
  case 6:console.log(`ìl risultato del modulo è ${intNum1%intNum2}`);
  break;
  case 7:console.log(`ìl risultato della potenza è ${Math.pow(intNum1,intNum2)}`);
  break;
  case 8:console.log(`ìl risultato della media è ${(intNum1+intNum2/2)}`);
  break;

}
