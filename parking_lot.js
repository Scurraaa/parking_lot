const SMALL_SLOT = 0;
const MEDIUM_SLOT = 1;
const LARGE_SLOT = 2;

//Class for a ParkingLot
class ParkingLot {
    constructor(
        map,
        sizes,
        entryPoint = 3,
    ) {
        this.map = map;
        this.sizes = sizes;
        this.entryPoint = entryPoint;
    }

    check_parking_slot() {
        return this.sizes;
    }
    //Function that would park a vehicle to the nearest entry point.
    //accepts a vehicle object as a paramater.
    //returns a List of where the vehicles is parked (A,B,C) and the parking slot object
    park_vehicle(vehicle) {
        //Initial Loop through the list of parking slots
        for(var i=0 ; i<this.sizes.length; i++) {
            //check if the slot is occupied and if the vehicle size is SMALL
            //Small vehicles can park either of the three, Small, Medium, Large Parking Slot
            if(vehicle.vehicle_size === 'S' && !this.sizes[i].occupied) {
                //check if where would be the vehicle coming from entry point 1;
               if(vehicle.entry_point === 1) {
                   // calculate for the closest distance from where the vehicle is coming from
                   var currDistance = Math.abs(1 - this.map[0].entry_point1);
                   var newDistance = Math.abs(1 - this.map[i].entry_point1);
                   // check if the new distance is less than the curr distance if so park the vehicle
                   // else park the vehicle with the lowest distance from the entry point of the vehicle
                    if(newDistance < currDistance) {
                        currDistance = newDistance;
                        this.sizes[i].occupied = true;
                        this.sizes[i].charge = 40;
                        this.sizes[i].time_in = new Date()
                        this.sizes[i].vehicle = vehicle;
                        return [this.map[i], this.sizes[i]]
                    } else {
                        this.sizes[i].occupied = true;
                        this.sizes[i].charge = 40;
                        this.sizes[i].time_in = new Date()
                        this.sizes[i].vehicle = vehicle;
                        return [this.map[i], this.sizes[i]]
                    }
               }
               //check if where would be the vehicle coming from entry point 2;
               else if(vehicle.entry_point == 2) {
                   // calculate for the closest distance from where the vehicle is coming from
                    var currDistance = Math.abs(1 - this.map[0].entry_point2);
                    var newDistance = Math.abs(1 - this.map[i].entry_point2);
                    // check if the new distance is less than the curr distance if so park the vehicle
                   // else park the vehicle with the lowest distance from the entry point of the vehicle
                    if(newDistance < currDistance) {
                        currDistance = newDistance;
                        this.sizes[i].occupied = true;
                        this.sizes[i].charge = 40;
                        this.sizes[i].time_in = new Date()
                        this.sizes[i].vehicle = vehicle;
                        return [this.map[i], this.sizes[i]]
                    } else {
                        this.sizes[i].occupied = true;
                        this.sizes[i].charge = 40;
                        this.sizes[i].time_in = new Date()
                        this.sizes[i].vehicle = vehicle;
                        return [this.map[i], this.sizes[i]]
                    }
               }
               //check if where would be the vehicle coming from entry point 3;
               else if(vehicle.entry_point == 3) {
                   // calculate for the closest distance from where the vehicle is coming from
                    var currDistance = Math.abs(1 - this.map[0].entry_point3);
                    var newDistance = Math.abs(1 - this.map[i].entry_point3);
                    // check if the new distance is less than the curr distance if so park the vehicle
                   // else park the vehicle with the lowest distance from the entry point of the vehicle
                    if(newDistance < currDistance) {
                        currDistance = newDistance;
                        this.sizes[i].occupied = true;
                        this.sizes[i].charge = 40;
                        this.sizes[i].time_in = new Date()
                        this.sizes[i].vehicle = vehicle;
                        return [this.map[i], this.sizes[i]]
                    } else {
                        this.sizes[i].occupied = true;
                        this.sizes[i].charge = 40;
                        this.sizes[i].time_in = new Date()
                        this.sizes[i].vehicle = vehicle;
                        return [this.map[i], this.sizes[i]]
                    }
               }
            }
            //check the size of the vehicle and if the parking slot is occupied
            else if (vehicle.vehicle_size === 'M' && !this.sizes[i].occupied) {
                //if the vehicle size is medium it can only be parked at medium slot and large slot
                if(this.sizes[i].slot_size ===  MEDIUM_SLOT || this.sizes[i].slot_size === LARGE_SLOT) {
                    if(vehicle.entry_point === 1) {
                        var currDistance = Math.abs(1 - this.map[0].entry_point1);
                        var newDistance = Math.abs(1 - this.map[i].entry_point1);
                         if(newDistance < currDistance) {
                             currDistance = newDistance;
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         } else {
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         }
                    }
                    else if(vehicle.entry_point == 2) {
                         var currDistance = Math.abs(1 - this.map[0].entry_point2);
                         var newDistance = Math.abs(1 - this.map[i].entry_point2);
                         if(newDistance < currDistance) {
                             currDistance = newDistance;
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         } else {
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         }
                    }
                    else if(vehicle.entry_point == 3) {
                         var currDistance = Math.abs(1 - this.map[0].entry_point3);
                         var newDistance = Math.abs(1 - this.map[i].entry_point3);
                         if(newDistance < currDistance) {
                             currDistance = newDistance;
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         } else {
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             return [this.map[i], this.sizes[i]]
                         }
                    }
                    // if there is no more available slot for the vehicle to parked
                    // return no avaialable parking slot
                } else {
                    return 'No available Parking Slot'
                }
            }
            //checks if the vehicle size is Large and if the parking slot is occupied
            //Large vehicles can only be parked at Large Parking Slot
            else if (vehicle.vehicle_size === 'L' && !this.sizes[i].occupied) {
                if(this.sizes[i].slot_size === LARGE_SLOT) {
                    if(vehicle.entry_point === 1) {
                        var currDistance = Math.abs(1 - this.map[0].entry_point1);
                        var newDistance = Math.abs(1 - this.map[i].entry_point1);
                         if(newDistance < currDistance) {
                             currDistance = newDistance;
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         } else {
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         }
                    }
                    else if(vehicle.entry_point == 2) {
                         var currDistance = Math.abs(1 - this.map[0].entry_point2);
                         var newDistance = Math.abs(1 - this.map[i].entry_point2);
                         if(newDistance < currDistance) {
                             currDistance = newDistance;
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         } else {
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         }
                    }
                    else if(vehicle.entry_point == 3) {
                         var currDistance = Math.abs(1 - this.map[0].entry_point3);
                         var newDistance = Math.abs(1 - this.map[i].entry_point3);
                         if(newDistance < currDistance) {
                             currDistance = newDistance;
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         } else {
                             this.sizes[i].occupied = true;
                             this.sizes[i].charge = 40;
                             this.sizes[i].time_in = new Date()
                             this.sizes[i].vehicle = vehicle;
                             return [this.map[i], this.sizes[i]]
                         }
                    }
                } else {
                    return 'No available Parking Slot'
                }
            } 
        }
    }

    //Function that would unpark a vehicle.
    //accepts a vehicle object as a paramater.
    //returns the total parking fee amount for how long the vehicle stayed at the parking slot.
    unpack_vehicle(vehicle) {
        //Loops through the parking slots.
        for(var i = 0; i < this.sizes.length; i++) {
            //check if the parking slot is occupied and there is a vehicle parked.
            if(this.sizes[i].occupied && this.sizes[i].vehicle !== undefined) {
                //check if the vehicle provided in the parameter is the same with the vehicle parked in the parking slot.
                if(this.sizes[i].vehicle.plate_number === vehicle.plate_number) {
                    //checks if the vehicle size is in a small parking slot.
                    if(this.sizes[i].slot_size === SMALL_SLOT) {
                        //calculate the total amount of parking fee the vehicle consumed.
                        // small parking slot cause a 20/hour rate.
                        // and every exceeding 24 hours the vehicles is charge for 5000 PHP.
                        let total_charge = this.sizes[i].charge
                        let time_out = new Date().getHours()
                        let time_difference = Math.ceil(Math.abs(parseInt(this.sizes[i].time_in.getHours()) - parseInt(time_out)))
                        while(time_difference > 24) {
                            if(time_difference > 24) {
                                total_charge += this.sizes[i].charge + 5000
                                time_difference -= 24;
                            }
                        }
                        total_charge = total_charge + (20 * time_difference)
                        this.sizes[i].occupied = false;
                        this.sizes[i].vehicle = null;
                        this.sizes[i].time_in = null;
                        return `Total Parking Charge is: ${total_charge} PHP for vehicle ${vehicle.plate_number}`
                    }
                    //checks if the vehicle size is in a medium parking slot.
                    else if (this.sizes[i].slot_size === MEDIUM_SLOT) {
                        //calculate the total amount of parking fee the vehicle consumed.
                        // medium parking slot cause a 60/hour rate.
                        // and every exceeding 24 hours the vehicles are charged for 5000 PHP.
                        let total_charge = this.sizes[i].charge;
                        let time_out = new Date().getHours()
                        let time_difference = Math.ceil(Math.abs(parseInt(this.sizes[i].time_in.getHours()) - parseInt(time_out)))
                        while(time_difference > 24) {
                            if(time_difference > 24) {
                                total_charge += this.sizes[i].charge + 5000
                                time_difference -= 24;
                            }
                        }
                        total_charge = total_charge + (60 * time_difference)
                        this.sizes[i].occupied = false;
                        this.sizes[i].vehicle = null;
                        this.sizes[i].time_in = null;
                        return `Total Parking Charge is: ${total_charge} PHP for vehicle ${vehicle.plate_number}`
                    }
                    //checks if the vehicle size is in a medium parking slot.
                    else if (this.sizes[i].slot_size === LARGE_SLOT) {
                        // calculate the total amount of parking fee the vehicle consumed.
                        // large parking slot cause a 60/hour rate.
                        // and every exceeding 24 hours the vehicles are charged for 5000 PHP.
                        let total_charge = this.sizes[i].charge;
                        let time_out = new Date().getHours()
                        let time_difference = Math.ceil(Math.abs(parseInt(this.sizes[i].time_in.getHours()) - parseInt(time_out)))
                        while(time_difference > 24) {
                            if(time_difference > 24) {
                                total_charge += this.sizes[i].charge + 5000
                                time_difference -= 24;
                                // console.log(total_charge)
                            }
                        }
                        total_charge = total_charge + (100 * time_difference)
                        this.sizes[i].occupied = false;
                        this.sizes[i].vehicle = null;
                        this.sizes[i].time_in = null;
                        return `Total Parking Charge is: ${total_charge} PHP for vehicle ${vehicle.plate_number}`
                    }
                }
            }
        }
    }
}

module.exports = ParkingLot;