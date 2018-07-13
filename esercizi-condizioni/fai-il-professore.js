/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/

var intVoto = 28;


if (intVoto<18){
  console.log(`il voto dello studente è insufficente!`)}
  else if (intVoto===18 || intVoto<21){
    console.log(`il voto dello studente è sufficiente`)}
    else if (intVoto===21 || intVoto<24){
      console.log(`il voto dello studente è buono`)}
      else if (intVoto===24 || intVoto<27){
        console.log(`il voto dello studente è distinto`)}
        else if (intVoto===27 || intVoto<29){
          console.log(`il voto dello studente è ottimo`)}
          else if (intVoto=30){
            console.log(`il voto dello studente è eccellente!`)};

      switch (intVoto){
              case 15:
              case 16:
              case 17:
              console.log(`il voto dello studente è insufficente!`);
              break;
              case 18:
              case 19:
              case 20:
              console.log(`ìl voto dello studente è sufficiente`);
              case 21:
              case 22:
              case 23:
               console.log(`il voto dello studente è buono`);
              break;
              case 24:
              case 25:
              case 26:
               console.log(`il voto dello studente è distinto`);
              break;
              case 27:
              case 28:
              case 29:
               console.log(`il voto dello studente è ottimo`);
              break;
              case 30:
              console.log(`il voto dello studente è eccellente`);
              break;
              default:
              console.log('il numero che hai inserito non è valido per un voto!');
            }
