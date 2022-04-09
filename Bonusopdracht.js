// Bonusopdracht (1.)

//INPUT
// -

//OUTPUT
// Drie aangemaakte knoppen:
// Sorteer op prijs
// AmbiLight TV's
// Uitverkochte exemplaren

//Resulten worden in console gelogt

//STAPPEN
// Drie buttons maken in HTML
// Drie functies schrijven a.d.h.v. code uit opdracht 1
// Knoppen koppelen aan de functies in HTML


function sortTelevisionsOnPriceInConsole() {
    inventory.sort((a, b) => {
        return a.price - b.price;
    })
    return inventory.map((item) => {
        console.log("TV naam: " + item.name + " - Prijs: " + item.price);
    })
}

function getAmbiLightTelevisionsInConsole() {
    return inventory.filter((television) => {
        if (television.options.ambiLight) {
            console.log("AmbiLight TV's: " + television.name);
        }
    })
}

function getSoldOutTelevisionsInConsole() {
    return inventory.filter((television) => {
        if (television.originalStock - television.sold < 1) {
            console.log("Uitverkochte exemplaren: " + television.name + ".");
        }
        return (television.originalStock - television.sold < 1);
    })
}

// Bonusopdracht (2.)

//INPUT
// Functies geschreven in bonusopdracht (1.)

//OUTPUT
// Uitkomsten van functies uit bonusopdracht (1.) worden meegegeven aan televisionGenerator() functie en weergegeven op de website

//STAPPEN
// console.log syntax veranderen in return statements in functies van bonusopdracht (1.)
// Functie televisionGenerator() aanroepen in de zojuist aangemaakt functies

function sortTelevisionsOnPrice() {
    inventory.sort((a, b) => {
        return a.price - b.price;
    })
    const televisionsDetails = document.getElementById("television-details");
    televisionsDetails.innerText = "";
    televisionGenerator(inventory);
}

function getAmbiLightTelevisions() {
    const televisionsWithAmbilight = inventory.filter((television) => {
        return (television.options.ambiLight);
    })
    const televisionsDetails = document.getElementById("television-details");
    televisionsDetails.innerText = "";
    televisionGenerator(televisionsWithAmbilight);
}

function getSoldOutTelevisions() {
    const soldOutTelevisions = inventory.filter((television) => {
        return (television.originalStock - television.sold < 1);
    })
    const televisionsDetails = document.getElementById("television-details");
    televisionsDetails.innerText = "";
    televisionGenerator(soldOutTelevisions);
}