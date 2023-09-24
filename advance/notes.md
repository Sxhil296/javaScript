# Object Oriented in JavaScript

## Do javaScript really have classes?
JavaScript does have a concept called "classes," introduced in ECMAScript 6 (ES6) in 2015. However, it's important to note that JavaScript's classes are primarily syntactical sugar over its existing prototype-based inheritance system. In other words, JavaScript's classes provide a more structured and familiar way to work with objects and inheritance, but they are still **based on prototypes** under the hood.

## OOPs
Object-Oriented Programming (OOP) is a programming paradigm that uses objects as the central building blocks for creating and organizing code. In JavaScript, OOP is supported, but it's a bit different from classical OOP languages like Java or C++.

## Objects
Collections of key-value pairs, where each value can be a piece of data or a function (method). It is the base unit.

 ```javascript
 // Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
};

// Accessing object properties and calling a method
console.log(person.firstName); // Output: "John"
person.greet(); // Output: "Hello, I'm John Doe"

```
## Constructor Function
A constructor function in JavaScript is a special function used to create and initialize objects. It's like a blueprint for creating multiple objects with the same structure and behavior.

```javascript
// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name; // Setting the name property
    this.age = age;   // Setting the age property

    // Adding a method to the Person objects
    this.sayHello = function() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    };
}

// Creating two Person objects using the constructor
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

// Accessing properties and calling the method
console.log(person1.name);     // Output: "John"
console.log(person2.age);      // Output: 25
person1.sayHello();            // Output: "Hello, I'm John and I'm 30 years old."
person2.sayHello();            // Output: "Hello, I'm Alice and I'm 25 years old."

```

## Abstraction
Abstraction means simplifying complex things by modeling classes based on their essential characteristics. It hides the unnecessary details and focuses on what's important.

## Inheritance
Inheritance allows you to create new classes (child classes) that inherit properties and methods from existing classes (parent classes). It promotes code reuse.

## Encapsulation
Encapsulation bundles data (properties) and the methods (functions) that operate on that data into a single unit (object or class). It keeps data safe and controlled.

## Polymorphism
Polymorphism allows different classes or objects to respond to the same method or property in a way specific to their individual types. It promotes flexibility and extensibility.

