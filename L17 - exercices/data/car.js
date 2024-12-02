//Ex 1 
class Car {
    brand;
    model;
    speed = 0;
    isTrunkOpen = false;
    displayInfo() {
        console.log(`${this.brand}, ${this.model}`)
    }
    go() {
        this.speed > 200 ? console.log('Maximum speed reached.') :
        this.speed += 5, console.log(`${this.speed}`)
    }
    brake() {
        this.speed <= 0 ? 
        console.log('The car is stopped.') :
        this.speed -= 5, console.log(`${this.speed}`)
    }
    openTrunk() {

        if(this.speed !== 0) {
            console.log("Can't open the trunk while the car is moving.")
        } else {
            this.isTrunkOpen ? console.log('Trunk already open') :
            this.isTrunkOpen = true
            console.log('Trunk open.')
        }
    }
    closeTrunk () {
        !this.isTrunkOpen ? console.log('Trunk already closed.') : this.isTrunkOpen = false, console.log('Trunk closed.')
    }
    constructor(carInfo) {
        this.brand = carInfo.brand
        this.model = carInfo.model
    }
}

const carInfo = [
    {
        brand: 'Toyota',
        model: 'Corolla'
    }, {
        brand: 'Tesla',
        model: 'Model 3'
    }, {
        brand: 'McLaren',
        model: 'F1'
    }
]

//EXAMPLE CODE, from solutions of the course
/*
const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});
*/

const car1 = new Car (carInfo[0])
const car2 = new Car (carInfo[1])

console.log(car1)
console.log(car2)

//Ex 2
//Add a method called ".displayInfo" at the class
car1.displayInfo()
car2.displayInfo()

//Ex3 
//Add a 'speed' property, which represents how fast the car is going.

car1.go()

car1.openTrunk()
car1.closeTrunk()
car1.openTrunk()
car1.openTrunk()
car1.closeTrunk()
car1.closeTrunk()

class raceCar extends Car {
    acceleration = 20;

    go() {
        this.speed += this.acceleration;
        if (this.speed >=300) {
            this.speed = 300;
            console.log(`Top speed reached, ${this.speed}KM/h`)
        }
        console.log(this.speed)
    };

    brake() {
        this.speed -= 30;
        if(this.speed <= 0) {
            this.speed = 0;
            console.log('Race car is stopped')
        }
        console.log(this.speed)
    };

    openTrunk() {
        console.log("Race cars don't have a trunk")
    };

    closeTrunk () {
        console.log("Race cars don't have a trunk")
    };

    constructor(carInfo) {
        super(carInfo)
        this.brand = carInfo.brand
        this.model = carInfo.model
    };
};
const raceCar1 = new raceCar (carInfo[2]);

console.log(raceCar1);
raceCar1.go();
raceCar1.openTrunk();
raceCar1.closeTrunk();
raceCar1.brake();