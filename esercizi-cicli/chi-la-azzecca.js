/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var intRandom = Math.floor(Math.random() * 100) + 1;

var intGamer1 = 67;

var intGamer2 = 5;

if (intGamer1 === intRandom){
  console.log(`ìl giocatore 1 ha azzeccato il numero vincente!`)}
  else if (intGamer1>intRandom&&intGamer2>intRandom&&intGamer1-intRandom<intGamer2-intRandom){
   console.log(`il giocatore 1 si è avvicinato maggiormente al numero estratto!`)}
   else if (intGamer1<intRandom&&intGamer2<intRandom&&intRandom-intGamer1<intRandom-intGamer2){
    console.log(`il giocatore 1 si è avvicinato maggiormente al numero estratto!`)}
        else if (intGamer1>intRandom&&intGamer2<intRandom&&intGamer1-intRandom<intRandom-intGamer2){
          console.log(`il giocatore 1 si è avvicinato maggiormente al numero estratto!`)}
          else if (intGamer1<intRandom&&intGamer2>intRandom&&intRandom-intGamer1<intGamer2-intRandom){
            console.log(`il giocatore 1 si è avvicinato maggiormente al numero estratto!`)}
              else if (intGamer1>intRandom&&intGamer2>intRandom&&intGamer1-intRandom===intGamer2-intRandom){
               console.log(`Nessuno dei 2 giocatori ha vinto la differenza è la stessa!`)}
               else if (intGamer1<intRandom&&intGamer2<intRandom&&intRandom-intGamer1===intRandom-intGamer2){
                console.log(`Nessuno dei 2 giocatori ha vinto la differenza è la stessa!`)}
                    else if (intGamer1>intRandom&&intGamer2<intRandom&&intGamer1-intRandom===intRandom-intGamer2){
                      console.log(`Nessuno dei 2 giocatori ha vinto la differenza è la stessa!`)}
                      else if (intGamer1<intRandom&&intGamer2>intRandom&&intRandom-intGamer1===intGamer2-intRandom){
                        console.log(`Nessuno dei 2 giocatori ha vinto la differenza è la stessa!`)};



   if (intGamer2 === intRandom){
      console.log(`ìl giocatore 2 ha azzeccato il numero vincente!`)}
      else if (intGamer2>intRandom&&intGamer1>intRandom&&intGamer2-intRandom<intGamer1-intRandom){
       console.log(`il giocatore 2 si è avvicinato maggiormente al numero estratto!`)}
       else if (intGamer2<intRandom&&intGamer1<intRandom&&intRandom-intGamer2<intRandom-intGamer1){
        console.log(`il giocatore 2 si è avvicinato maggiormente al numero estratto!`)}
            else if (intGamer2>intRandom&&intGamer1<intRandom&&intGamer2-intRandom<intRandom-intGamer1){
              console.log(`il giocatore 2 si è avvicinato maggiormente al numero estratto!`)}
              else if (intGamer2<intRandom&&intGamer1>intRandom&&intRandom-intGamer2<intGamer1-intRandom){
                console.log(`il giocatore 2 si è avvicinato maggiormente al numero estratto!`)};

console.log(`il valore estratto è ${intRandom}`);
