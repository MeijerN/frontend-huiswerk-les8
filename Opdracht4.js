// Opdracht 4 -Functies

//4a
// INPUT
// 1 tv object als argument (inventory[0])

// OUTPUT
// String op de volgende manier [merk] [type] - [naam]

// STAPPEN
// Declareer functie
// Return de entry's .brand, .type en .name in de juiste format

function getTelevisionDetails(television) {
    return `${television.brand} ${television.type} - ${television.name}`
}

console.log(getTelevisionDetails(inventory[1]));

//4b
// INPUT
// 1 tv prijs als argument

// OUTPUT
// Prijs in de goede format: €379,-

// STAPPEN
// Declareer functie met parameter
// Return de prijs in de juiste format

function formatPrice(price) {
    return `€${price},-`;
}

console.log(formatPrice(200));

//4c
// INPUT
// 1 screen sizes array

// OUTPUT
// String van de beschikbare scherm afmetingen in de juiste format: 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// STAPPEN
// Functie declareren met parameter
// Lege array variabele declareren om bewerkte waardes in op te slaan
// Over elke waarde itereren van de array met for loop en aanpassen
// variabele returnen

function getFormattedScreenSizes(array) {
    let availableScreenSizes = [];
    for (let i = 0; i < array.length; i++) {
        availableScreenSizes.push(array[i] + " inch (" + (array[i] * 2.25) + " cm)");
    }
    return availableScreenSizes.join(" | ");
}

console.log(getFormattedScreenSizes(inventory[3].availableSizes));

//4d
// INPUT
// 1 tv object als argument

// OUTPUT
// String in de juiste format:

// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// STAPPEN
// Variabele aanmaken
// HTML element maken
// Referentie naar bestaande element opslaan
// Aanpassingen maken in het bestaande element door functies aan te roepen in de document.write() methode

const singeTelevisionDetails = document.getElementById("singe-television-details");
singeTelevisionDetails.innerText = `${getTelevisionDetails(inventory[3])}
    ${formatPrice(inventory[3].price)}
    ${getFormattedScreenSizes(inventory[3].availableSizes)}
`;

//4e
//INPUT
// inventory array

// OUTPUT
// Alle aanwezige tv's in de volgende format:

// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// STAPPEN
// HTML element maken
// Functie declareren met parameter televisions
// Over elke entry itereren met for loop
// Hierin referentie naar bestaande element opslaan
// television-details element aanvullen met TV details

function televisionGenerator(televisions) {
    const televisionsDetails = document.getElementById("television-details");
    for (let i = 0; i < televisions.length; i++) {
        televisionsDetails.innerText += `${getTelevisionDetails(televisions[i])}
    ${formatPrice(televisions[i].price)}
    ${getFormattedScreenSizes(televisions[i].availableSizes)}
    
`;
    }
}

televisionGenerator(inventory);