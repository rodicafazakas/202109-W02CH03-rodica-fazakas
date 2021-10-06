    
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

let costTotal = 0;
let countScale = 0;
let destinations = [];
let ids = []; 


let userName = prompt('Indica su nombre: ');

if (userName !== null) {
    console.log('Bienvenid@ ' + userName +'.');
    userInterface(flights); 
}
 
function userInterface(flights) {   

    displayGeneralFlightInfo();
    
    let typeUser = prompt('Usted es ADMIN o USUARIO (default)?','usuario').toLowerCase();
    if (typeUser == 'admin') {
        adminOperations();
    } else {
        normalUserOperations();
    }
}

function displayGeneralFlightInfo() {
    flights.forEach(function (item) {
        if (item.scale == false) {
            console.log(`El vuelo con origen ${item.from} y destino ${item.to} tiene un coste de ${item.cost} y ninguna escala.`);
        } else {
            console.log(`El vuelo con origen ${item.from} y destino ${item.to} tiene un coste de ${item.cost} y tiene escala.`);
            countScale += 1;
        }
        costTotal += item.cost;
        destinations.push(item.to);
        ids.push(item.id);
        return costTotal, countScale, destinations;
    });

    let costMedio = costTotal / flights.length;
    console.log(`El coste medio de los vuelos es: ${Math.round(costMedio)}.`);
    console.log(`${countScale} vuelos tienen escala.`);
    destinations.splice(0, 6); // removed destinations
    console.log(`Los destinos de los ultimos 5 vuelos del dia son: ${destinations}.`);
}


function adminOperations() {
    option = prompt('Quieres anadir o suprimir un vuelo (anadir/suprimir)?').toLowerCase();     

    if (option === 'anadir') {
        addFlight();
    } else if (option === 'suprimir') {
        deleteFlight();
    }

    function addFlight() {
        if (flights.length < 26) {
            let newFlight = {
                id: flights.length + 1,
                to: prompt('Introduce destination: ', 'Valladolid'),
                from: prompt('Introduce origin: ', 'Barcelona'),
                cost: prompt('Introduce price: ', 50),
                scale: prompt('Introduce if scale (yes/no): ', 'no')
            };
            if (newFlight.scale == 'yes' ) { 
                newFlight.scale == true
            } else {
                newFlight.scale == false
            };
            flights.push(newFlight);
            console.log('There are now ' + flights.length + ' flights.');
        } else {
            console.log('No more flights are alowed!');
        }
    }

    function deleteFlight() {
        let idToDelete = prompt('Introduce id: '); 
        indexFlight = ids.indexOf(idToDelete);
        delete flights.splice(indexFlight, 1);
        console.log('There are now ' + flights.length + ' flights.');
        return flights;
    }
}

function normalUserOperations() {
    // filter by price to get all flights cheaper than filterPrice
    let filterPrice = prompt('Introduce price filter: '); 
    filteredFlights = flights.filter(
        function (x) {
            return x.cost <= filterPrice;
        });
    
    filteredFlights.forEach(function (item) {
        if (item.scale == false) {
            console.log(`El vuelo con id ${item.id}, con origen ${item.from} y destino ${item.to} tiene un coste de ${item.cost} y ninguna escala.`);
        } else {
            console.log(`El vuelo con id ${item.id}, con origen ${item.from} y destino ${item.to} tiene un coste de ${item.cost} y tiene escala.`);
        }
    });
    
    filteredIds = [];
    filteredFlights.forEach(function (item) { filteredIds.push(item.id); });

    let flightToBuyId = prompt('Elige un vuelo para comprar: ');   

    let flightToBuyExists = filteredIds.some(
        function (x) { 
            return x == flightToBuyId
        });

    if (flightToBuyExists) {
        console.log('Has elegido el vuelo con id '+ flightToBuyId +'. Gracias por su compra, vuelva pronto.');
    } else {
        console.log('El vuelo con id ' + flightToBuyId + ' no esta entre los vuelos seleccionados');
    }
}


