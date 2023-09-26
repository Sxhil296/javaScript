let myName = "Emir  ";

// console.log(myName.length)
// console.log(myName.trueLength)

let heroes = ["thor", "spiderMan", "ironMan"];
let heroPowers = {
  thor: "hammer",
  spiderMan: "wev",
  ironMan: "suit",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderMan}`);
  },
};

//giving prototype to object so that it can be found in every object
Object.prototype.emir = function () {
  console.log(`emir is present in all objects`);
};

// heroes.emir()
// heroPowers.emir()
Array.prototype.heyEmir = function () {
  console.log("emir says hello");
};

// heroes.heyEmir()
// heroPowers.heyEmir()  giving prototype to arrays only can be seen in arrays only not ib objects

let anotherString = "Emir   ";
console.log(anotherString.length);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`)
};
anotherString.trueLength()
