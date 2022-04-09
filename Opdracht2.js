//Opdracht 2 - Elementen in de DOM plaatsen

// 2a
// INPUT
// inventory array

// OUTPUT
// aantal verkochte televisies

//STAPPEN
// variabele declareren om verkochte tv's in op te slaan
// for loop schrijven waarbij de verkochte tv's bij de waarde van bovenstaande variabele opgeteld worden

let soldTelevisions = 0;

for (let i = 0; i < inventory.length; i++) {
    soldTelevisions += inventory[i].sold;
}
console.log(soldTelevisions);

//2b
// INPUT
//soldTelevisions variabele

// OUTPUT
// Aantal verkochte tv's wordt in het groen weergegeven op de website

// STAPPEN
// HTML element maken
// Element groen maken met CSS
// Referentie naar bestaande element opslaan
// Aanpassingen maken in het bestaande element

const soldTelevisionsElement = document.getElementById("sold-televisions");
soldTelevisionsElement.textContent = soldTelevisions;

//2c
// INPUT
// inventory array

// OUTPUT
// aantal ingekochte televisies

//STAPPEN
// variabele declareren om ingekochte tv's in op te slaan
// for loop schrijven waarbij de ingekochte tv's bij de waarde van bovenstaande variabele opgeteld worden

let boughtTelevisions = 0;

for (let i = 0; i < inventory.length; i++) {
    boughtTelevisions += inventory[i].originalStock;
}
console.log(boughtTelevisions);

// 2d
// INPUT
//boughtTelevisons variabele

// OUTPUT
// Aantal ingekochte tv's wordt in het blauw weergegeven op de website

// STAPPEN
// HTML element maken
// Element blauw maken met CSS
// Referentie naar bestaande element opslaan
// Aanpassingen maken in het bestaande element

const boughtTelevisionsElement = document.getElementById('bought-televisions');
boughtTelevisionsElement.textContent = boughtTelevisions;

//2e
// INPUT
// boughtTelevisions variabele en soldTelevisons variabele

// OUTPUT
// aantal nog te verkopen televisies in het rood weergegeven op de website

//STAPPEN
// variabele declareren om te verkopen tv's in op te slaan
// soldTelevisions aftrekken van de boughtTelevisions
// HTML element maken
// Element rood maken met CSS
// Referentie naar bestaande element opslaan
// Aanpassingen maken in het bestaande element

const unsoldTelevisions = boughtTelevisions - soldTelevisions;

const unsoldTelevisionsElement = document.getElementById("unsold-televisions");
unsoldTelevisionsElement.textContent = unsoldTelevisions;





