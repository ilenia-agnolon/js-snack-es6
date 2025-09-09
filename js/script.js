
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
    peso: 7                 // peso in kg
  },
  {//biciclette[1]
    nome: "Specialized Tarmac",
    peso: 6
  },
  {//biciclette[2]
    nome: "Cannondale SuperSix",
    peso: 5
  },
  {//biciclette[3]
    nome: "Trek Emonda",
    peso: 8
  }
]


//1. Inizializzare la variabile

let biciConPesoMinore = biciclette [0]; //parto assumendo che la bici più leggera sia la prima dell’array



//2. Ciclare tutto l'array biciclette con for

for (let i = 0; i < biciclette.length; i++) {


    //a. prendo la bici del giro corrente/che sto guardando così in ogni giro, salvo in questa variabile l’oggetto bici che sto analizzando
    const biciCheStoGuardando = biciclette [i]; 


        //b. confronto con una condizione il peso della bici che sto guardando con il peso della bici che finora è la più leggera:

            if (biciCheStoGuardando.peso < biciConPesoMinore.peso) { // ---> "se la bici attuale pesa meno della bici più leggera trovata finora"

               
                //c. se la bici attuale pesa meno, aggiorno la variabile biciConPesoMinore con questa nuova bici:

                 biciConPesoMinore = biciCheStoGuardando; // --> "aggiorno la bici più leggera"
            }
}



//3. Stampare in console per vedere quale bici è la più leggera
console.log("La bici più leggera è: ", biciConPesoMinore);




/*
• Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creo un array che contiene oggetti "squadra di calcio"
// ogni oggetto ha 3 proprietà: nome (stringa), punti e falli (tutti inizialmente a 0)
const squadre = [
  {
    nome: "Milan",
    punti: 0,
    falli: 0
  },
  {
    nome: "Inter",
    punti: 0,
    falli: 0
  },
  {
    nome: "Juventus",
    punti: 0,
    falli: 0
  },
  {
    nome: "Roma",
    punti: 0,
    falli: 0
  }
];


//1. GENERARE NUMERI RANDOM PER OGNI SQUADRA
for (let i = 0; i < squadre.length; i++) {

    const squadraCheStoGuardando =  squadre[i];

    squadraCheStoGuardando.punti = Math.floor(Math.random() * 11); //numeri da 0 a 10 inclusi
    squadraCheStoGuardando.falli = Math.floor(Math.random() * 11);
}

console.log(squadre);


//2. CREO UN ARRAY VUOTO
squadreConFalli = []; //lo userò per salvare solo le info richieste



//3. RIEMPIRE IL NUOVO ARRAY



//4. STAMPARE IN CONSOLE




