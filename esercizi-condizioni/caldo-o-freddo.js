/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
var tempLun = 17;

var tempMar = 25;

var tempMer = 23;

var tempGio = 19;

var tempVen = 28;

var tempSab = 26;

var tempDom = 15;

if (tempLun>tempMar && tempLun>tempMer && tempLun>tempGio && tempLun>tempVen && tempLun>tempSab && tempLun>tempDom){
console.log(`Lunedì è la giornata più calda!`)} else if (tempMar>tempLun && tempMar>tempMer && tempMar>tempGio && tempMar>tempVen && tempMar>tempSab && tempMar>tempDom){
  console.log(`Martedì è la giornata più calda!`)} else if (tempMer>tempLun && tempMer>tempMar && tempMer>tempGio && tempMer>tempVen && tempMer>tempSab && tempMer>tempDom){
    console.log(`Mercoledì è la giornata più calda!`)} else if (tempGio>tempLun && tempGio>tempMar && tempGio>tempMer && tempGio>tempVen && tempGio>tempSab && tempGio>tempDom){
      console.log(`Giovedì è la giornata più calda!`)} else if (tempVen>tempLun && tempVen>tempMar && tempVen>tempMer && tempVen>tempGio && tempVen>tempSab && tempVen>tempDom){
        console.log(`Venerdì è la giornata più calda!`)} else if (tempSab>tempLun && tempSab>tempMar && tempSab>tempMer && tempSab>tempGio && tempSab>tempVen && tempSab>tempDom){
          console.log(`Sabato è la giornata più calda!`)} else if (tempDom>tempLun && tempDom>tempMar && tempDom>tempMer && tempDom>tempGio && tempDom>tempVen && tempDom>tempSab){
            console.log(`Domenica è la giornata più calda!`)};
            if(tempLun<tempMar && tempLun<tempMer && tempLun<tempGio && tempLun<tempVen && tempLun<tempSab && tempLun<tempDom){
            console.log(`Lunedì è la giornata più fredda!`)} else if (tempMar<tempLun && tempMar<tempMer && tempMar<tempGio && tempMar<tempVen && tempMar<tempSab && tempMar<tempDom){
              console.log(`Martedì è la giornata più fredda!`)} else if (tempMer<tempLun && tempMer<tempMar && tempMer<tempGio && tempMer<tempVen && tempMer<tempSab && tempMer<tempDom){
                console.log(`Mercoledì è la giornata più fredda!`)} else if (tempGio<tempLun && tempGio<tempMar && tempGio<tempMer && tempGio<tempVen && tempGio<tempSab && tempGio<tempDom){
                  console.log(`Giovedì è la giornata più fredda!`)} else if (tempVen<tempLun && tempVen<tempMar && tempVen<tempMer && tempVen<tempGio && tempVen<tempSab && tempVen<tempDom){
                    console.log(`Venerdì è la giornata più fredda!`)} else if (tempSab<tempLun && tempSab<tempMar && tempSab<tempMer && tempSab<tempGio && tempSab<tempVen && tempSab<tempDom){
                      console.log(`Sabato è la giornata più fredda!`)} else if (tempDom<tempLun && tempDom<tempMar && tempDom<tempMer && tempDom<tempGio && tempDom<tempVen && tempDom<tempSab){
                        console.log(`Domenica è la giornata più fredda!`)};
