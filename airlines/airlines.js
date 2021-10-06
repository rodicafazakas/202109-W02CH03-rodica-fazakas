
// global list of available flights
let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
];


let userName = prompt('What is your name? ');

if (userName !== null) {
    console.log('Welcome ' + userName +'.');
    userInterface(flights); 
}

function userInterface(flights) {    

    let costTotal = 0;
    let countScale = 0;
    let destinations = [];

    flights.forEach ( function (item) {

            if (item.scale == false) {
                console.log(`El vuelo con origen ${item.from} y destino ${item.to} tiene un coste de ${item.cost} y ninguna escala.`);
            } else {
                console.log(`El vuelo con origen ${item.from} y destino ${item.to} tiene un coste de ${item.cost} y tiene escala.`) 
                countScale += 1;
            }

            costTotal += item.cost;
            destinations.push(item.to);
            return costTotal, countScale, destinations;
        }
    )

    let costMedio = costTotal / flights.length;
    console.log(`El coste medio de los vuelos es: ${Math.round(costMedio)}.`);
    console.log(`${countScale} vuelos tienen escala.`);   
    destinations.splice(0,6); // removed destinations
    console.log(`Los destinos de los ultimos 5 vuelos del dia son: ${destinations}.`);

}

