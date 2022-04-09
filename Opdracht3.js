// Opdracht 3 - Array methoden en functies

// 3a
// INPUT
// inventory array

// OUTPUT
// lijst met tv merken op de website

// STAPPEN
// variabele declareren om de tv merken in op te slaan
// Middels .map methode alle merken opslaan
// HTML list element aanmaken
// Referentie naar bestaande element opslaan
// Aanpassingen maken in het bestaande element

// inventory.map((television) => {
//     // Create list-item and populate list-item
//     const listItem = document.createElement("li");
//     listItem.textContent = television.brand;
//     // Get parent element
//     const getListElement = document.getElementById("television-brands-list");
//     // Add list-item to parent element
//     getListElement.appendChild(listItem);
// })
// console.log(televisionBrands);

//3b
// INPUT
// Code uit opdracht 3a

// OUTPUT
// Functie die functionaliteit bezit van opdracht 3a waarbij deze een array met tv objecten verwacht

// STAPPEN
// functie declareren met parameter array
// Code uit 3a verwerken in functie

function makeBrandsList(array) {
    array.map((television) => {
        // Create list-item and populate list-item
        const listItem = document.createElement("li");
        listItem.textContent = television.brand;
        // Get parent element
        const getListElement = document.getElementById("television-brands-list");
        // Add list-item to parent element
        getListElement.appendChild(listItem);
    })
}

makeBrandsList(inventory);