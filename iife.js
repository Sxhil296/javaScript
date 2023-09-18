//Immediately Invoked Function Expressions (IIFE)


//named IIFE
(function chai() {
  console.log("DB Connected!");
})();


//unnamed IIFE
((name) => {
  console.log(`Db Connected Two ${name}`);
})('Emir');
