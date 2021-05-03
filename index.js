const { v4: uuidv4 } = require('uuid');
const ParkingLot = require('./parking_lot');
const Vehicle = require('./vehicle');


//constant sizes for vehicles
const SMALL_VEHICLE = 'S';
const MEDIUM_VEHICLE = 'M';
const LARGE_VEHICLE = 'L';

//constant parking slot sizes
const SMALL_SLOT = 0;
const MEDIUM_SLOT = 1;
const LARGE_SLOT = 2;



// Initialize 4 cars with different vehicle sizes, and coming from various entry points.
// added a plate_number tag to make the vehicle unique.
const mycar1 = new Vehicle(SMALL_VEHICLE, 1, uuidv4())
const mycar4 = new Vehicle(SMALL_VEHICLE, 3, uuidv4())
const mycar2 = new Vehicle(MEDIUM_VEHICLE, 2, uuidv4())
const mycar3 = new Vehicle(LARGE_VEHICLE, 3, uuidv4())

// Initialize the ParkingLot with the map of the parking lot
// and the parking slot sizes for every slot.
const parkingLot = new ParkingLot([
    {
        'entry_point1': 5,
        'entry_point2': 2,
        'entry_point3': 3,
    },
    {
        'entry_point1': 6,
        'entry_point2': 1,
        'entry_point3': 2
    },
    {
        'entry_point1': 7,
        'entry_point2': 2,
        'entry_point3': 1
    },
    {
        'entry_point1': 5,
        'entry_point2': 2,
        'entry_point3': 3
    },
    {
        'entry_point1': 4,
        'entry_point2': 2,
        'entry_point3': 2
    }
], [{
    'slot_size': SMALL_SLOT,
    'occupied': true
}, {
    'slot_size': LARGE_SLOT,
    'occupied': false
}, {
    'slot_size': MEDIUM_SLOT,
    'occupied': false
}, {
    'slot_size': MEDIUM_SLOT,
    'occupied': false
}, {
    'slot_size': SMALL_SLOT,
    'occupied': false
}]);



console.log(parkingLot.park_vehicle(mycar1))
console.log(parkingLot.park_vehicle(mycar4))
console.log(parkingLot.park_vehicle(mycar2))
console.log(parkingLot.park_vehicle(mycar3))
console.log(parkingLot.unpack_vehicle(mycar1))