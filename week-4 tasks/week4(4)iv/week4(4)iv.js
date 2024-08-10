function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Car.prototype.printDetails = function() {
    console.log(`Car: ${this.year} ${this.make} ${this.model}`);
};
let myCar = new Car("Toyota", "Corolla", 2020);
myCar.printDetails();
