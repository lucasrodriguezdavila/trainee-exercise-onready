import Bike from "./classes/Bike.js";
import Concessionaire from "./classes/Concessionaire.js";
import Car from "./classes/Car.js";

const lineBreak = () => console.log("=============================");

const peugeot206 = new Car("Peugeot", "206", 200000.0, 4);
const hondaTitan = new Bike("Honda", "Titan", 60000.0, 125);
const peugeot208 = new Car("Peugeot", "208", 250000.0, 5);
const yamahaYBR = new Bike("Yamaha", "YBR", 80500.5, 160);
const vehicleList = [peugeot206, hondaTitan, peugeot208, yamahaYBR];

const concessionaire = new Concessionaire();
concessionaire.setVehicles(vehicleList);

concessionaire.getVehicles().map((v) => console.log(v.toString()));

lineBreak();

let moreExpesive = concessionaire.getMoreExpensive();
let lessExpensive = concessionaire.getLessExpensive();
let vehicleWithY = concessionaire.getModelContains("Y");

console.log(`Vehículo más caro: ${moreExpesive.getName()}`);
console.log(`Vehículo más barato: ${lessExpensive.getName()}`);
console.log(
  `Vehículo que contiene en el modelo la letra ‘Y’: ${vehicleWithY.getName()} $${vehicleWithY.getPrice()}`
);

lineBreak();

console.log("Vehículos ordenados por precio de mayor a menor:");
let expensiveVehicles = concessionaire.getExpensivesVehicles();
expensiveVehicles.map((vehicle) => console.log(vehicle.getName()));
