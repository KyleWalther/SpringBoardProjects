class Vehicle {
    constructor(make,model,year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return 'Beep'
    }
    toString(){
       return `The vehicle is a ${this.make} ${this.model} and was made in ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make,model,year){
    super(make,model,year)
    this.numWheels = 4
}
    toString(){
        return `It moves on ${this.numWheels} wheels. ` + super.toString()
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
    super(make,model,year)
    this.numWheels = 2
    }
    revEngine(){
        return "VROOM"
    }

}

class Garage {
    constructor(capacity){
    this.vehicles = []
    this.capacity = capacity
    }
add(newCar){
    if (!(newCar instanceof Vehicle)) {
        return "only cars are allowed in here!"
    }
    if (this.vehicles.length >= this.capacity) {
        return "sorry there is no more room."
    }
    this.vehicles.push(newCar)
        return "Car added!"
    }
}

const car1 = new Vehicle('Honda','Accord','1999')
const car2 = new Car('Honda','Accord','1999')
const bike = new Motorcycle('honda', 'ninja', '2001','2')
const myGarage = new Garage(3)




