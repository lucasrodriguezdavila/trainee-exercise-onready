import Vehicle from "./Vehicle.js";

export default class Bike extends Vehicle {
  constructor(brand, model, price, cylinder) {
    super(brand, model, price);
    this.setCylinder(cylinder);
  }
  getCylinder() {
    return this.cylinder;
  }
  setCylinder(cylinder) {
    this.cylinder = cylinder;
  }
  toString() {
    return `Marca: ${this.getBrand()} // Modelo: ${this.getModel()} // Cilindrada: ${this.getCylinder()}cc // Precio: $${this.getPrice()}`;
  }
}
