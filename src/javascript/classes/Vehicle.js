export default class Vehicle {
  constructor(brand, model, price) {
    this.setBrand(brand);
    this.setModel(model);
    this.setPrice(price);
  }
  getBrand() {
    return this.brand;
  }
  getModel() {
    return this.model;
  }
  getPrice() {
    return this.price;
  }
  getName() {
    return `${this.getBrand()} ${this.getModel()}`;
  }
  setBrand(brand) {
    this.brand = brand;
  }
  setModel(model) {
    this.model = model;
  }
  setPrice(price) {
    this.price = price;
  }
}
