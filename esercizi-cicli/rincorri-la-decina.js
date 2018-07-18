/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/
var total=0

var i=0;
while(i<100){
  total+=i;
  i++;
   console.log(`${i}`);
  if (i===10||i===20||i===30||i===40||i===50||i===60||i===70||i===80||i===90){
console.log(`\n`)};
};
