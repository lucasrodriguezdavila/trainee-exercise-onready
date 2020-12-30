import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
  constructor(brand, model, price, doors) {
    super(brand, model, price);
    this.setDoors(doors);
  }
  getDoors() {
    return this.doors;
  }
  setDoors(doors) {
    this.doors = doors;
  }
  toString() {
    return `Marca: ${this.getBrand()} // Modelo: ${this.getModel()} // Puertas: ${this.getDoors()} // Precio: $${this.getPrice()}`;
  }
}
