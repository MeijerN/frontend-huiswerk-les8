//Opdracht 1 - Array Methoden

// 1a
const televisionTypes = inventory.map((television) => {
    return television.type;
})
console.log(televisionTypes);

// 1b
const soldOutTelevisions = inventory.filter((television) => {
    return (television.originalStock - television.sold < 1);
})
console.log(soldOutTelevisions);

// 1c
const televisionsWithAmbilight = inventory.filter((television) => {
    return (television.options.ambiLight);
})
console.log(televisionsWithAmbilight);

// 1d
function sortTelevisions() {
    inventory.sort((a, b) => {
        return a.price - b.price;
    })
    return inventory.map((item) => {
        return item.price;
    })
}
// Functie wordt nog niet aangeroepen omdat in bonusopdracht de TV's eerst ongesorteerd weergegeven moeten worden'
// console.log(sortTelevisions());
