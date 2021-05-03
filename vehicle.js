// Class for a Vehicle
class Vehicle {
    constructor(
        vehicle_size,
        entry_point,
        plate_number
    ) {
        this.vehicle_size = vehicle_size,
        this.entry_point = entry_point,
        this.plate_number = plate_number;
    }
}

module.exports = Vehicle;