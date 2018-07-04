/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e se   condi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var intSecond = 6780;

var intOre = (intSecond)/3600;

var intMinut = ((intSecond)-(Math.round(intOre)*3600))/60;

var intSecond = (intSecond)-((Math.round(intOre)*3600)+(Math.round(intMinut)*60));



console.log(`i secondi trasformati in ore,secondi,minuti hanno dato come risultato ${Math.round(intOre)} ore,${Math.round(intMinut)} minuti,${intSecond} secondi.`);
