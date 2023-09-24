# Object Oriented in JavaScript

## Do javaScript really have classes?
JavaScript does have a concept called "classes," introduced in ECMAScript 6 (ES6) in 2015. However, it's important to note that JavaScript's classes are primarily syntactical sugar over its existing prototype-based inheritance system. In other words, JavaScript's classes provide a more structured and familiar way to work with objects and inheritance, but they are still **based on prototypes** under the hood.

## OOPs
Object-Oriented Programming (OOP) is a programming paradigm that uses objects as the central building blocks for creating and organizing code. In JavaScript, OOP is supported, but it's a bit different from classical OOP languages like Java or C++.

## Objects
 collections of key-value pairs, where each value can be a piece of data or a function (method).

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
## Abstraction
Abstraction means simplifying complex things by modeling classes based on their essential characteristics. It hides the unnecessary details and focuses on what's important.

## Inheritance
Inheritance allows you to create new classes (child classes) that inherit properties and methods from existing classes (parent classes). It promotes code reuse.

## Encapsulation
Encapsulation bundles data (properties) and the methods (functions) that operate on that data into a single unit (object or class). It keeps data safe and controlled.

## Polymorphism
Polymorphism allows different classes or objects to respond to the same method or property in a way specific to their individual types. It promotes flexibility and extensibility.

