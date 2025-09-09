
//Snack Array e Oggetti


/*
• Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

//creo un array che contiene oggetti "bici da corsa" -> ogni oggetto ha 2 proprietà: nome e peso
const biciclette = [
  {//biciclette[0]
    nome: "Bianchi Sprint",    // nome della bici
    peso: 7.2                  // peso in kg
  },
  {//biciclette[1]
    nome: "Specialized Tarmac",
    peso: 6.8
  },
  {//biciclette[2]
    nome: "Cannondale SuperSix",
    peso: 7.0
  },
  {//biciclette[3]
    nome: "Trek Emonda",
    peso: 6.7
  }
]


//1. Inizializzare la variabile
let biciConPesoMinore = biciclette [0];

//2. Ciclare tutto l'array con for


//3. Stampare in console per vedere quale bici è la più leggera



/*
• Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


