/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model){
        this.currentSpeed = 0
        this.model = model
        this.accelerate = () => {
            this.currentSpeed++
        }
        this.brake = () => {
            this.currentSpeed--
        }
        this.toString = () => {
            return `${this.currentSpeed} - ${this.model}`
        }
    }

}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const newCar = new Car('runrun')
newCar.accelerate()
newCar.accelerate()
newCar.brake()
console.log(newCar.toString())
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car { 
    
}
const electricCar = new ElectricCar('tesla')
electricCar.accelerate()
electricCar.accelerate()
electricCar.brake()
console.log(electricCar.toString())
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
