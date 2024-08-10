let person = {
    name: "Nandini",
    age: 18,
    introduce: function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};
person.introduce();
