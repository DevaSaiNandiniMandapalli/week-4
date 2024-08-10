class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    printDetails() {
        console.log(`Animal: ${this.name}, Species: ${this.species}`);
    }
}
let myAnimal = new Animal("Simba", "Lion");
myAnimal.printDetails();
