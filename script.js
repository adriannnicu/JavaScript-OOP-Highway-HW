function Vehicles(maxSpeed) {
    this.maxSpeed = maxSpeed;
}

function Bus(maxSpeed) {
    Vehicles.call(this, maxSpeed);
}
Bus.prototype = Object.create(Vehicles.prototype);
Bus.prototype.constructor = Bus;

function Car(maxSpeed) {
    Vehicles.call(this, maxSpeed);
}
Car.prototype = Object.create(Vehicles.prototype);
Car.prototype.constructor = Car;

function Motorcycle(maxSpeed) {
    Vehicles.call(this, maxSpeed);    
}
Motorcycle.prototype = Object.create(Vehicles.prototype);
Motorcycle.prototype.constructor = Motorcycle;

function Truck(maxSpeed) {
    Vehicles.call(this, maxSpeed);
}
Truck.prototype = Object.create(Vehicles.prototype);
Truck.prototype.constructor = Truck;

function NormalHighway(maxSpeed) {
    this.maxSpeed = maxSpeed;
}

NormalHighway.prototype.runing = function(vehicle) {
    var speedLimit = 120;
    if (vehicle.maxSpeed <= speedLimit) {
        console.log(`This vehicle was traveling at ${vehicle.maxSpeed} km/h.`);
    } else {
        console.error(`This vehicle was traveling at ${vehicle.maxSpeed} km/h. The speed is too high on this highway.`)
    }
}

function SpeedHighway(maxSpeed) {
    this.maxSpeed = maxSpeed;
}
SpeedHighway.prototype.runing = function(vehicle) {
    var minSpeed = 120;
    if (vehicle.maxSpeed >= minSpeed) {
        console.log(`This vehicle was traveling at ${vehicle.maxSpeed} km/h.`);
    } else {
        console.error(`This vehicle was traveling at ${vehicle.maxSpeed} km/h. The speed is too low on this highway.`)
    }
}

var toyota = new Car('200');
var mercedes = new Bus('120');
var yamaha = new Motorcycle('300');
var scania = new Truck('90');
console.log(toyota);
console.log(mercedes);
console.log(yamaha);
console.log(scania);

var normalHighway = new NormalHighway();
normalHighway.runing(yamaha);

var speedHighway = new SpeedHighway();
speedHighway.runing(yamaha);