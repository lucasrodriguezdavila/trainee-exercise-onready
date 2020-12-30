export default class Concessionaire {
  constructor() {
    this.vehicles = [];
  }
  setVehicles(vehicles) {
    this.vehicles = vehicles;
  }
  getVehicles() {
    return this.vehicles;
  }
  getMoreExpensive() {
    return this.getVehicles().reduce(
      (max, vehicle) => (vehicle.getPrice() > max.getPrice() ? vehicle : max),
      this.getVehicles()[0]
    );
  }
  getLessExpensive() {
    return this.getVehicles().reduce(
      (max, vehicle) => (vehicle.getPrice() < max.getPrice() ? vehicle : max),
      this.getVehicles()[0]
    );
  }
  getModelContains(letter) {
    let vehicle = null;
    for (let i = 0; i < this.getVehicles().length; i++) {
      if (this.vehicles[i].getModel().includes(letter)) {
        vehicle = this.vehicles[i];
        break;
      }
    }
    return vehicle;
  }
  getExpensivesVehicles() {
    return this.getVehicles()
      .slice(0)
      .sort((prev, next) => {
        return next.getPrice() - prev.getPrice();
      });
  }
}
