// Animal class
class Animal {
    constructor(species) {
        this._species = species; // Use a private variable convention (_species)
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the animal's sound
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat class inheriting from Animal
class Cat extends Animal {
    constructor(species) {
        super(species); // Call parent constructor
    }

    // Cat-specific method
    purr() {
        console.log("purr");
    }
}

// Dog class inheriting from Animal
class Dog extends Animal {
    constructor(species) {
        super(species); // Call parent constructor
    }

    // Dog-specific method
    bark() {
        console.log("woof");
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof

// Expose classes for Cypress testing
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
